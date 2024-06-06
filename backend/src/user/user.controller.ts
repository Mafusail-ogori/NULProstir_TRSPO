import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Delete,
  Put,
} from '@nestjs/common';
import { SignUpUserDto } from './libs/dtos/signup-user.dto';
import { UserService } from './user.service';
import { AuthUserGuard } from '../auth/guards/auth-user.guard';
import { DeleteUserDto } from './libs/dtos/delete-user.dto';
import { UpdateUserDto } from './libs/dtos/update-user-dto';
import { Role } from './libs/enums/user.role';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/sign-up')
  create(@Body() signUpUserDto: SignUpUserDto) {
    return this.userService.create(signUpUserDto);
  }

  @UseGuards(AuthUserGuard)
  @Get('/get-profile-info')
  getUserInfoById(@Request() request: any) {
    return this.userService.findUserProfileById(request.userId);
  }

  @UseGuards(AuthUserGuard)
  @Delete('/delete-user')
  deleteUserById(
    @Body() deleteUserDto: DeleteUserDto,
    @Request() request: any,
  ) {
    return this.userService.deleteUserProfileByIdAndPassword(
      deleteUserDto.password,
      request.userId,
    );
  }

  @UseGuards(AuthUserGuard)
  @Put('/update-user')
  updateUserById(
    @Body() updateUserDto: UpdateUserDto,
    @Request() request: any,
  ) {
    return this.userService.updateUserProfileById(
      updateUserDto,
      request.userId,
    );
  }
}
