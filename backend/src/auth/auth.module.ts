import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthUserGuard } from './guards/auth-user.guard';
import { AuthCreatorGuard } from './guards/auth-creator.guard';
import { AuthModeratorGuard } from './guards/auth-moderator.guard';
import { AuthAdminGuard } from './guards/auth-admin.guard';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
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
  ],
  providers: [
    AuthService,
    AuthUserGuard,
    AuthCreatorGuard,
    AuthModeratorGuard,
    AuthAdminGuard,
  ],
  controllers: [AuthController],
  exports: [AuthUserGuard],
})
export class AuthModule {}
