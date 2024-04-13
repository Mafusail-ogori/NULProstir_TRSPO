import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Role } from './libs/enums/user.role';
import { Status } from './libs/enums/user.status';
import { SignUpUser } from './libs/types/signup-user.type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUser: SignUpUser) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUser.email,
        userName: createUser.userName,
      },
    });
    if (existUser) throw new BadRequestException('Duplicated Data');

    await this.userRepository.save({
      fullName: createUser.fullName,
      userName: createUser.userName,
      email: createUser.email,
      birthDate: createUser.birthDate,
      passwordHash: await argon2.hash(createUser.password),
      gender: createUser.gender,
      status: Status.Online,
      role: Role.User,
      graduationLevel: createUser.graduationLevel,
    });
    return true;
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
}
