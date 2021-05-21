// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy, } from 'passport-jwt';
// import { AuthclientService } from 'src/auth/authclient/authclient.service';




// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) { 
//     constructor(private readonly authService: AuthclientService) {
//         super({
//             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//             secretOrKey: 'dhiasecretkey',
//         });  
//     }
    
//     // async validate(payload: JwtPayload): Promise<UserDto> {
//     //   //  const user = await this.authService.validateUser(payload);
//     //     if (!user) {
//     //         throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
//     //     }    
//     //     return user;  
//     // }
// }
