import { Injectable } from '@nestjs/common';
import { IAuthService } from '../../interfaces/auth';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/utils/typeorm';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly jwtService: JwtService) {}
  async createJWT(user: User): Promise<string> {
    const payload = { sub: user.id };
    return await this.jwtService.signAsync(payload);
  }
}
