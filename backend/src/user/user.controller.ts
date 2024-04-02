import { Body, Controller, Post } from '@nestjs/common';
import { SignUpUserDto } from './libs/dtos/signup-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/sign-up')
  create(@Body() signUpUserDto: SignUpUserDto) {
    return this.userService.create(signUpUserDto);
  }
}
