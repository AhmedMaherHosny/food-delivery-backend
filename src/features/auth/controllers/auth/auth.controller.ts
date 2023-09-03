import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { UserService } from './../../../user/services/user/user.service';
import { comparePassword, encodePassword } from 'src/utils/bcrypt';
import { LoginUserDto } from '../../dtos/login-user.dto';
import { userToUserType } from 'src/utils/typeorm/entities/user.entity';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() body: CreateUserDto) {
    if (await this.userService.validateUserByEmail(body.email)) {
      throw new HttpException(
        'This email is already exists!',
        HttpStatus.CONFLICT,
      );
    }
    if (await this.userService.validateUserByPhoneNumber(body.phoneNumber)) {
      throw new HttpException(
        'This phone number is already exists!',
        HttpStatus.CONFLICT,
      );
    }
    const password = encodePassword(body.password);
    await this.userService.createUser({ ...body, password });
    return this.login(body);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() body: LoginUserDto) {
    const user = await this.userService.validateUserByEmail(body.email);
    if (!user) {
      throw new HttpException(
        'Invalid cardinalities!',
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (!comparePassword(body.password, user.password)) {
      throw new HttpException(
        'Invalid cardinalities!',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const userWithToken = userToUserType(
      user,
      await this.authService.createJWT(user),
    );
    return userWithToken;
  }
}
