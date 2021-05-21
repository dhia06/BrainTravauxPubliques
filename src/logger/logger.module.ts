
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { GuserRepository } from './guser.repository';
import { JwtStrategy } from './jwt.strategy';

import { AuthService } from 'src/signin/auth.service';
import { UserService } from 'src/signup/user.service';
import { AuthController } from 'src/signin/auth.controller';
import { UsersController } from 'src/signup/users.controller';
import { UserRepository } from 'src/signin/user.repository';



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
      TypeOrmModule.forFeature([GuserRepository]),



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
        LoggerService,
      JwtStrategy,
      AuthService,
      UserService
     
    ],
    exports: [
      JwtStrategy,
      PassportModule
    ],
    controllers: [LoggerController,AuthController,UsersController],
  })
  
  






  export class LoggerModule {
  }
  
