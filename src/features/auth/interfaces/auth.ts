import { User } from 'src/utils/typeorm';

export interface IAuthService {
  createJWT(user: User): Promise<string>;
}
