import { Injectable, UnauthorizedException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { VerifyDto } from 'src/Authentification/DTO/verify.dto';
import { UserP } from 'src/Model/user.entity';

import * as bcrypt from 'bcrypt';
import { UserPr } from 'src/Model/UserPr.entity';
import { UserPRepository } from './user.repository';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserPRepository)
    private userRepository: UserPRepository,
    private jwtService: JwtService,  
  ) {}


  async hashPassword(pswd) {
    let password = await bcrypt.hash(pswd, 10);
    return password;
    //const isMatch =  await bcrypt.compare(pwd,hash)
  }




  async Verify(credentials: VerifyDto) {
 
   return await this.userRepository.save(credentials);
   
  }


  async findProfById(id: number): Promise<UserP>{

    const cv = await this.userRepository.findOne(id);
      return cv;
  
  }


  async findusByemail(email: string): Promise<any>{
    console.log("emaiooooooooooooooool "+email);
  return await this.userRepository.findByEmail(email);
  }

}