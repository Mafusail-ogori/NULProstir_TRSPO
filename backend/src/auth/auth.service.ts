import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.userService.findOne(email);
    const passwordIsMatch = await argon2.verify(user.passwordHash, password);
    if (user && passwordIsMatch) {
      return {
        token: this.jwtService.sign({ id: user.id, email: user.email, role: user.role }),
      };
    }
    throw new UnauthorizedException('user or password are incorrect');
  }
}
