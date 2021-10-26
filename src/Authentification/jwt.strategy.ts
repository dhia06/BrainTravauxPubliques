import {PassportStrategy} from '@nestjs/passport';
import { Strategy, ExtractJwt }from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPrRepository } from './logger/UserPr.repository';
import { UserEntityRepository } from './logger/UserEntity.repository';
import { UserPRepository } from './signin/user.repository';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(
    @InjectRepository(UserPrRepository)
    private userRepository: UserPrRepository,


    // @InjectRepository(UserPRepository)
    // private userPRepository: UserPRepository,



    // @InjectRepository(UserEntityRepository)
    // private client: UserEntityRepository
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
