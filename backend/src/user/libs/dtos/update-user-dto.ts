import { IsUUID } from 'class-validator';
import { SignUpUserDto } from './signup-user.dto';

export class UpdateUserDto extends SignUpUserDto {
  @IsUUID()
  id: string;
}
