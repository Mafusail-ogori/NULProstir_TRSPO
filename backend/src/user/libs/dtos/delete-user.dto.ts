import { IsString, MinLength } from 'class-validator';

export class DeleteUserDto {
  @IsString()
  @MinLength(8, { message: 'Password should not be less than 8 symbols' })
  password: string;
}
