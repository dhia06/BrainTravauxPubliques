import {PassportStrategy} from '@nestjs/passport';
import { Strategy, ExtractJwt }from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey: 'aSecretToken'
    });
  }error

  async validate(payload) {
    const {email} = payload;
    const user = this.userRepository.findOne({email});

    if (!user) {
      throw new UnauthorizedException(`Vous n'etes pas 
      autorisé à accéder à cette ressource!!!!!!!
      `);
    } else {
      return user;
    }
  }
}
