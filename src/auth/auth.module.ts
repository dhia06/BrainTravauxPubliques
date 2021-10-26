import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from 'src/Authentification/jwt.strategy';
import { AuthController } from 'src/Authentification/signin/auth.controller';
import { AuthService } from 'src/Authentification/signin/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPrRepository } from 'src/Authentification/logger/UserPr.repository';
import { UserPRepository } from 'src/Authentification/signin/user.repository';


@Module({  
  imports: [    
      UserModule,    
      PassportModule.register({
          defaultStrategy: 'jwt',
          property: 'user',
          session: false,
      }),
      TypeOrmModule.forFeature([UserPrRepository]),
  
      // TypeOrmModule.forFeature([UserPRepository]),
      JwtModule.register({
        secret:   "dhiasecretkey",
        signOptions: {
          expiresIn: 3600
          },
      }),
  ], 
  controllers: [AuthController],  
  providers: [AuthService, JwtStrategy],  
  exports: [
      PassportModule,
      JwtStrategy,
      AuthService
  ],
})
export class AuthModule {}
