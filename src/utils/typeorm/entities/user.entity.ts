import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { UserType } from 'src/utils/types';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //@Column({ length: 16 })
  //@Length(3, 16)
  @Column({ nullable: true })
  username: string;

  //@Column({ unique: true })
  @Column({ nullable: true })
  email: string;

  //@Column({ length: 32 })
  //@Length(2, 32)
  @Column({ nullable: true })
  firstName: string;

  //@Column({ length: 32 })
  //@Length(2, 32)
  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  @Exclude()
  password: string;

  //@Column({ unique: true })
  @Column({ nullable: true })
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
