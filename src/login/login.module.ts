
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';

import { UserService } from 'src/user/user.service';
import { JwtStrategy } from 'src/jwt.strategy';
import { UserPrRepository } from 'src/Authentification/logger/UserPr.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [    
    UserModule,    
    PassportModule.register({
        defaultStrategy: 'jwt',
        property: 'client',
        session: false,
        
    }),
    TypeOrmModule.forFeature([UserPrRepository]),
    JwtModule.register({
      secret:   "dhiasecretkey",
      signOptions: {
        expiresIn: 3600
        },
    }),
],
  controllers: [LoginController],
  providers: [LoginService,JwtStrategy],
  exports: [
    PassportModule,
    JwtStrategy,
    LoginService
],
})
export class LoginModule {}




