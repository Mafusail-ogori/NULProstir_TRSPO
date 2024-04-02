import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInUserDto } from '../user/libs/dtos/signin-user.dto';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(signInUserDto: SignInUserDto) {
    const user = await this.userService.findOne(signInUserDto.email);
    const passwordIsMatch = await argon2.verify(
      user.passwordHash,
      signInUserDto.password,
    );
    if (user && passwordIsMatch) {
      return user;
    }
    throw new UnauthorizedException('user or password are incorrect');
  }
}
