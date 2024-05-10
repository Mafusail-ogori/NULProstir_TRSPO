import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article/entities/article.entity';
import { User } from './user/entities/user.entity';
import { Chair } from './user/entities/chair.entity';
import { Institute } from './user/entities/institute.entity';
import { Subject } from './article/entities/subject.entity';
import { Lecturer } from './article/entities/lecturer.entity';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { Event } from './event/entities/event.entity';
import { Post } from './article/entities/post.entity';
import { TimetableModule } from './timetable/timetable.module';
import { TimeTableSubject } from './timetable/entities/timetable-subject.entity';

@Module({
  imports: [
    UserModule,
    ArticleModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'Hajaomija123',
        database: 'nulprostir',
        synchronize: true,
        entities: [
          Article,
          User,
          Chair,
          Institute,
          Subject,
          Lecturer,
          Event,
          Post,
          Article,
          Subject,
          TimeTableSubject,
        ],
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    EventModule,
    TimetableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
