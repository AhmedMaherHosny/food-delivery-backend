import { UserType } from 'src/utils/types';

export class CreateUserDto {
  /*@IsNotEmpty()
  @MinLength(3)
  @MaxLength(16)*/
  username: string;

  /*@IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)*/
  firstName: string;

  /*@IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)*/
  lastName: string;

  /*@IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.',
    },
  )*/
  password: string;

  /*@IsNotEmpty()
  @IsEmail()*/
  email: string;

  /*@IsNotEmpty()
  @IsPhoneNumber({
    message: 'The phone number must start with a ( + ) and country code',
  })*/
  phoneNumber: string;
}

export function createUserDtoToUserType(
  dto: CreateUserDto,
  token?: string,
): UserType {
  const userType: UserType = {
    username: dto.username,
    email: dto.email,
    phoneNumber: dto.phoneNumber,
    firstName: dto.firstName,
    lastName: dto.lastName,
    token: token || undefined,
    id: undefined,
  };

  return userType;
}
