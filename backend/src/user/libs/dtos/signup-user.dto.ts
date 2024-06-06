import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { Gender } from '../enums/user.gender';
import { GraduationLevel } from '../enums/user.graduation-level';

export class SignUpUserDto {
  @IsEmail()
  email: string;
  @IsString()
  fullName: string;
  @IsString()
  userName: string;
  @IsString()
  birthDate: Date;
  @MinLength(8, { message: 'Password should not be less than 8 symbols' })
  passwordHash: string;
  @IsEnum(Gender)
  gender: Gender;
  @IsEnum(GraduationLevel)
  graduationLevel: GraduationLevel;
}
