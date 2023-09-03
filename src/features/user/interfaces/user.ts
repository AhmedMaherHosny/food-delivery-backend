import { User } from 'src/utils/typeorm';
import { CreateUserDto } from './../../auth/dtos/create-user.dto';

export interface IUserService {
  createUser(createUserDto: CreateUserDto);
  validateUserByEmail(email: string): Promise<User | null>;
  validateUserByPhoneNumber(phoneNumber: string): Promise<User | null>;
}
