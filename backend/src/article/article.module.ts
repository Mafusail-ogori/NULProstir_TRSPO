import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { AuthModule } from '../auth/auth.module';
import { AuthUserGuard } from '../auth/guards/auth-user.guard';
import { AuthCreatorGuard } from '../auth/guards/auth-creator.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Lecturer } from './entities/lecturer.entity';
import { Subject } from './entities/subject.entity';
import { Post } from './entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article, Lecturer, Post, Subject]),
    AuthModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '9h',
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [ArticleController],
  providers: [ArticleService, AuthUserGuard, AuthCreatorGuard],
})
export class ArticleModule {}
