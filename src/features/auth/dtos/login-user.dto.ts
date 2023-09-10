export class LoginUserDto {
  /*@IsNotEmpty()
  @IsEmail()*/
  email: string;

  /*@IsNotEmpty()*/
  password: string;
}
