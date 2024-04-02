import { IsEmail, MinLength } from 'class-validator';

export class SignInUserDto {
  @IsEmail()
  email: string;
  @MinLength(8, { message: 'Password should not be less than 8 symbols' })
  password: string;
}
