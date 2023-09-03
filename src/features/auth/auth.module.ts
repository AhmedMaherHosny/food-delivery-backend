import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/utils/typeorm/entities/user.entity';
import { UserService } from '../user/services/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { environments } from 'src/environments/environments';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: environments.jwtSecret,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
