// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { JwtPayload } from 'src/interfaces/jwt.payload';
// import { CreateUserDto } from 'src/user/dto/CreateUser.dto';

// import { UserDto } from 'src/user/dto/User.dto';
// import { UserService } from 'src/user/user.service';
// //import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
// const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// @Injectable()
// export class AuthService {
//     constructor(private readonly userService: UserService, 
//         private readonly jwtService: JwtService,  ) {}


// //methode de signup et reception de sms de comfirmation
//          async register(userDto: CreateUserDto): 
         
//           Promise<void> {
//              const channel: any = 'sms';
//             console.log("chbi baba");
//             try {
//                 console.log(userDto.phonenumber);
//              const verificationRequest = await twilio.verify.services(process.env.VERIFICATION_SID)
//                 .verifications
//                 .create({ to: userDto.phonenumber, channel });
//                 console.log("code",await twilio.verify.services(process.env.VERIFICATION_SID) );
//               // return this.userRepo.signUp(CreateUserDto);
             
                
//             } catch (e) {
//               console.log('sing error');
//               console.log(userDto.phonenumber)
          
//             }
           
// }
// //methode de verification de code entrée et le code recu par sms
// async singUpverif(userDto:CreateUserDto):Promise<void>{
    
//     let verificationResult;
//     let code =userDto.code;
//     let phonenumber=userDto.phonenumber;
   
//        verificationResult = await twilio.verify.services(process.env.VERIFICATION_SID)
//         .verificationChecks
//         .create({ code, to: userDto.phonenumber });
//         console.log(verificationResult.status);
//         if (verificationResult.status === 'approved') {
//           //  apparaition de mot approuved si les deux codes sont identiques 
          
//             await this.userService.create(userDto); 
    
        
//         }
//         else {
//             console.log("code non valide!! :p")
//             //affichage d'un message d'eurreur 
//         }        
//       return await verificationResult.status;
      
//     }




// private _createToken({ username }: UserDto): any {
//     const user: JwtPayload = { username };    
//     const accessToken = this.jwtService.sign(user);    
//     return {
//         expiresIn: process.env.EXPIRESIN,
//         accessToken,    
//     };  
// }
// async validateUser(payload: JwtPayload): Promise<UserDto> {
//     const user = await this.userService.findByPayload(payload);    
//     if (!user) {
//       console.log("oki")
//         throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
//     }    
//     return user;  
// }




// }
