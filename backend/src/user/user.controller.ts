import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './libs/dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
