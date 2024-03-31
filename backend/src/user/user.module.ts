import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Institute } from './entities/institute.entity';
import { Chair } from './entities/chair.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Institute, Chair])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}