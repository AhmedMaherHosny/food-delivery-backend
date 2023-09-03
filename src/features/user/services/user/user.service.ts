import { Injectable } from '@nestjs/common';
import { IUserService } from '../../interfaces/user';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/utils/typeorm';
import { CreateUserDto } from 'src/features/auth/dtos/create-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  validateUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email: email } });
  }
  validateUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { phoneNumber: phoneNumber } });
  }
  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
  }
}
