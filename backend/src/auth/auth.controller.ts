import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { SignInUserDto } from '../user/libs/dtos/signin-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  @UseGuards(AuthGuard('local'))
  async signIn(@Body() signInUserDto: SignInUserDto) {
    return signInUserDto;
  }
}
