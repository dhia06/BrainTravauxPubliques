import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from 'src/signin/user.repository';
import { AuthService } from 'src/signin/auth.service';
import { UserService } from 'src/signup/user.service';
import { UsersController } from 'src/signup/users.controller';
import { AuthController } from 'src/signin/auth.controller';
//import { AuthclientModule } from './authclient/authclient.module';
//import { ClientController } from './client/client.controller';


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
