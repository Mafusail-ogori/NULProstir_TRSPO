import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignInUserDto {
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(8, { message: 'Password should not be less than 8 symbols' })
  password: string;
}
