import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsersController } from 'src/users/users.controller';
import { UserService } from 'src/services/user/user.service';

@Module({
  imports: [
    JwtModule.register(
      {
        secret: 'aSecretToken',
        signOptions: {
          expiresIn: 3600,
        },
      },
    ),
  
    PassportModule.register({ defaultStrategy: 'jwt' },
    ),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    UserService
   
  ],
  exports: [
    JwtStrategy,
    PassportModule
  ],
  controllers: [AuthController,UsersController],
})


export class AuthModule {
}
