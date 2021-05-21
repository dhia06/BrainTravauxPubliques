import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { Guser } from 'src/Model/guser.entity';

import { Repository } from 'typeorm';
import { AuthCredentials2Dto } from 'src/auth/DTO/auth-credentials2.dto';
import { PayloadInterface } from 'src/auth/Interfaces/payload.interface';
import { GuserRepository } from './guser.repository';
import { UserRepository } from 'src/signin/user.repository';
import { AuthCredentialsDto } from 'src/auth/DTO/auth-credentials.dto';
import * as bcrypt from 'bcrypt';



@Injectable()
export class LoggerService {
  constructor(@InjectRepository(GuserRepository) private guserRepository: GuserRepository,
  @InjectRepository(UserRepository) private userRepository: UserRepository,
  private jwtService: JwtService)
    {}
 


  async getAll(): Promise<Guser[]> {
    return await this.guserRepository.find(); 
   }
   async hashPassword(pswd) {
    let password = await bcrypt.hash(pswd, 10);
    return password;
    //const isMatch =  await bcrypt.compare(pwd,hash)
  }

    



  async checkPassword(email: string, password: string){
    var userFromDb = await this.userRepository.findOne({ email: email});
    if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    return await bcrypt.compare(password, userFromDb.password);
}

async checkPasswordg(email: string, password: string){
  var userFromDb = await this.guserRepository.findOne({ email: email});
  if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
  return await bcrypt.compare(password, userFromDb.password);
}

   async signIn2(credentials: AuthCredentials2Dto): Promise<PayloadInterface> {

    
    const user = await this.guserRepository.signIn1(credentials);
  
    if (user) {


      const payload = {email: user.email,password:user.password,role:user.role};
      const accessToken = await this.jwtService.sign(payload);
      const role = user.role;
      const firstname = user.firstname;
      const lastname = user.lastname;
      console.log("access token :"+accessToken);
      console.log("role :"+role);
      console.log("firstname :"+firstname);
      console.log("lastname :"+lastname);

      return {accessToken,role,firstname,lastname};
  
    } 

    const prouser = await this.userRepository.signIn(credentials);
    if (prouser) {

      const payload = {email: prouser.email,role: prouser.role};
      const accessToken = await this.jwtService.sign(payload);
      const role = prouser.role;
      const firstname = prouser.firstname;
      const lastname = prouser.lastname;
      console.log("access token :"+accessToken);
      console.log("role :"+role);
      console.log("firstname :"+firstname);
      console.log("lastname :"+lastname);

      return {accessToken,role,firstname,lastname};
  
  
    }  
    
    else {
      
      throw new UnauthorizedException('Please confirm your email to login');
    }
  }

}
