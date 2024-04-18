import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Role } from './libs/enums/user.role';
import { Status } from './libs/enums/user.status';
import { SignUpUser } from './libs/types/signup-user.type';
import { UpdateUser } from './libs/types/update-user.type';

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
      passwordHash: await argon2.hash(createUser.passwordHash),
      gender: createUser.gender,
      status: Status.Online,
      role: Role.User,
      graduationLevel: createUser.graduationLevel,
    });
    return true;
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async findUserProfileById(userId: string) {
    return await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
  }

  async deleteUserProfileByIdAndPassword(password: string, userId: string) {
    const existUser = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (existUser) {
      const passwordMatch = argon2.verify(existUser.passwordHash, password);
      if (passwordMatch) {
        return this.userRepository.delete(userId);
      }
      throw new UnauthorizedException('Incorrect password');
    }
    throw new UnauthorizedException();
  }

  async updateUserProfileById(updateUser: UpdateUser, userId: string) {
    const existUser = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (existUser) {
      const hashedPassword = await argon2.hash(updateUser.passwordHash);
      updateUser.passwordHash = hashedPassword;
      return this.userRepository.update(existUser.id, updateUser);
    }
    throw new NotFoundException('User to update not found');
  }
}
