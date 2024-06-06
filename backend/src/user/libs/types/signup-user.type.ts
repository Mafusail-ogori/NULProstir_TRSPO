import { Gender } from '../enums/user.gender';
import { GraduationLevel } from '../enums/user.graduation-level';

export interface SignUpUser {
  email: string;
  fullName: string;
  userName: string;
  birthDate: Date;
  passwordHash: string;
  gender: Gender;
  graduationLevel: GraduationLevel;
}
