import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpUserDto } from './libs/dtos/signup-user.dto';
import * as argon2 from 'argon2';
import { Role } from './libs/enums/user.role';
import { Status } from './libs/enums/user.status';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: SignUpUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
        userName: createUserDto.userName,
      },
    });
    if (existUser) throw new BadRequestException('Duplicated Data');

    const user = await this.userRepository.save({
      fullName: createUserDto.fullName,
      userName: createUserDto.userName,
      email: createUserDto.email,
      birthDate: createUserDto.birthDate,
      passwordHash: await argon2.hash(createUserDto.password),
      gender: createUserDto.gender,
      status: Status.Online,
      role: Role.User,
      graduationLevel: createUserDto.graduationLevel,
    });
    return { user };
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
}
