import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Length } from 'class-validator';
import { UserType } from 'src/utils/types';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 16 })
  @Length(3, 16)
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 32 })
  @Length(2, 32)
  firstName: string;

  @Column({ length: 32 })
  @Length(2, 32)
  lastName: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ unique: true })
  phoneNumber: string;
}

export function userToUserType(user: User, token?: string): UserType {
  const userType: UserType = {
    id: user.id,
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
    firstName: user.firstName,
    lastName: user.lastName,
    token: token || undefined,
  };

  return userType;
}
