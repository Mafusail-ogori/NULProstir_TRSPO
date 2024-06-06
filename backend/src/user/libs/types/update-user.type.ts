import { SignUpUser } from './signup-user.type';

export interface UpdateUser extends SignUpUser {
  id: string;
}
