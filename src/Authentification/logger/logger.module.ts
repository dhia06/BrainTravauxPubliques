
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';



import { AuthService } from 'src/Authentification/signin/auth.service';
import { UserService } from 'src/Authentification/SignUp/user.service';
import { AuthController } from 'src/Authentification/signin/auth.controller';
import { UsersController } from 'src/Authentification/SignUp/users.controller';
import { UserPRepository } from 'src/Authentification/signin/user.repository';
import { JwtStrategy } from 'src/Authentification/jwt.strategy';
import { UserPrRepository } from './UserPr.repository';
import { UserEntityRepository } from './UserEntity.repository';





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
      TypeOrmModule.forFeature([UserPrRepository]),



      JwtModule.register(
        {
          secret: 'aSecretToken',
          signOptions: {
            expiresIn: 3600,
          },
        },
      ), 
   
      TypeOrmModule.forFeature([UserPRepository]),

      
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
  
