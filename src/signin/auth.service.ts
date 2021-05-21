import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from 'src/auth/Interfaces/payload.interface';
import { AuthCredentialsDto } from 'src/auth/DTO/auth-credentials.dto';
import { VerifyDto } from 'src/auth/DTO/verify.dto';
import { User } from 'src/Model/user.entity';
import { AuthCredentials2Dto } from 'src/auth/DTO/auth-credentials2.dto';

import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,  
  ) {}


  
 
  // async signIn(credentials: AuthCredentialsDto): Promise<PayloadInterface> {
  //   const user = await this.userRepository.signIn(credentials);
  //   const paswrdhache = await this.hashPassword(user.password)
  //   const isMatch = await bcrypt.compare( user.password, paswrdhache);
  //   if (user && isMatch) {

  //     const payload = {email: user.email};
  //     const accessToken = await this.jwtService.sign(payload);
  //     const role = user.role;
  //     console.log("access token :"+accessToken);
  //     console.log("role :"+role);

  //     return {accessToken,role};
  
  //   } else {
      
  //     throw new UnauthorizedException('Please confirm your email to login');
  //   }
  // }



  




  async hashPassword(pswd) {
    let password = await bcrypt.hash(pswd, 10);
    return password;
    //const isMatch =  await bcrypt.compare(pwd,hash)
  }


















  async Verify(credentials: VerifyDto) {
 
   return await this.userRepository.save(credentials);
   
  }


  async findCvById(id: number): Promise<User>{

    const cv = await this.userRepository.findOne(id);
      return cv;
  
  }


  async findusByemail(email: string){
    console.log("email "+email);
  return await this.userRepository.findByEmail(email);
  }

}