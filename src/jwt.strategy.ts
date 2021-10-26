import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, } from 'passport-jwt';

import { UserDto } from 'src/user/dto/User.dto';
// import { AuthService } from './auth/auth.service';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'dhiasecretkey',
        });  
    }
    
 
}
