import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// import { JwtStrategy } from '../jwt.strategy';

import { UserPRepository } from 'src/Authentification/signin/user.repository';
import { AuthService } from 'src/Authentification/signin/auth.service';
import { UserService } from 'src/Authentification/SignUp/user.service';
import { UsersController } from 'src/Authentification/SignUp/users.controller';
import { AuthController } from 'src/Authentification/signin/auth.controller';
import { JwtStrategy } from 'src/Authentification/jwt.strategy';
import { UserPrRepository } from '../logger/UserPr.repository';

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
    TypeOrmModule.forFeature([UserPRepository]),
    TypeOrmModule.forFeature([UserPrRepository]),
    // TypeOrmModule.forFeature([TeamRepository]),
    //AuthclientModule,
    
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
  controllers: [AuthController,UsersController, ],
})


export class AuthModule {
}
