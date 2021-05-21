import {PassportStrategy} from '@nestjs/passport';
import { Strategy, ExtractJwt }from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { GuserRepository } from './guser.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(
    @InjectRepository(GuserRepository)
    private userRepository: GuserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey: 'aSecretToken'
    });
  }error

  async validate(payload) {
    const {password} = payload;
    const user = this.userRepository.findOne({password});

    if (!user) {
      throw new UnauthorizedException(`Vous n'etes pas 
      autorisé à accéder à cette ressource!!!!!!!
      `);
    } else {
      return user;
    }
  }
}
