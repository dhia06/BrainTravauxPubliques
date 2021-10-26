
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/interfaces/jwt.payload';
import { CreateUserDto } from 'src/user/dto/CreateUser.dto';
import { UserDto } from 'src/user/dto/User.dto';
import { UserService } from 'src/user/user.service';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPr } from 'src/Model/UserPr.entity';
import { Role } from 'src/entities/role';

import * as bcrypt from 'bcrypt';
import { UserPrRepository } from 'src/Authentification/logger/UserPr.repository';


// const TWILIO_ACCOUNT_SID = "AC6ab1c0da23c325dbd13be0e20cee46a8";
// const TWILIO_AUTH_TOKEN = "4709f544f10458a0eb8c64fd8f5f85aa";
// const VERIFICATION_SID = "VA4f03e9d1fa9cd2b000a51d45f99a308a";  
const TWILIO_ACCOUNT_SID = "ACe3f37b3ff5597efee7703754f871f45b";
const TWILIO_AUTH_TOKEN = "2eef1dfa58070dd1754313a415bda085";
const VERIFICATION_SID = "VA344ece19f8008707241b336fb50d5dad";
const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);


@Injectable()
export class LoginService {
  constructor(private userService: UserService, private jwtService: JwtService,
    @InjectRepository(UserPrRepository) private userRepoo: UserPrRepository,


  ) { }


  public async findOneuser(id: number): Promise<UserPr> {
    console.log("hhhhhhhhhhhhhhhhhhhhh")
    return await this.userRepoo.findOne({ where: { id: id } });
  }

  async hashPassword(password) {
    const passwordk = await bcrypt.hash(password, 12);
    console.log("loool", passwordk)
    return passwordk;
  }


  private async verifyPassword(hashedPassword2: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      hashedPassword2,
      hashedPassword
    );
    if (!isPasswordMatching) {
      console.log('one')
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

 
  public async register(userDto: CreateUserDto, usa: UserPr) {
    let paswrdhache = await this.hashPassword(usa.password)
    usa.password = paswrdhache;
    try {
      await this.verifyPassword(usa.plainTextPassword, usa.password);
      usa.password = paswrdhache;
      usa.role = Role.client;
      console.log("frfrf", usa);
    //  this.userRepoo.save(usa);
      console.log("ayyyyy");
      const channel: any = 'sms';
      console.log("debut process");
      try {
        console.log("tel", userDto.number);
        const verificationRequest = twilio.verify.services(VERIFICATION_SID)
          .verifications
          .create({ to: userDto.number, channel });
        console.log("code", twilio.verify.services(VERIFICATION_SID));
        console.log("fghvbh", verificationRequest)
        console.log("khkhklhjkgjkgjkf");



      }
      catch (e) {
        console.log('sign error');
        console.log(userDto.number)

      }
    }
    catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }


  }




  async singUpverif(usa: UserPr,userDto: CreateUserDto): Promise<void> {
    let paswrdhache = await this.hashPassword(userDto.password)
    userDto.password = paswrdhache;

    let verificationResult;
    let code = userDto.code;
    let num = userDto.number;
    verificationResult = await twilio.verify.services(VERIFICATION_SID)
      .verificationChecks
      .create({ code, to: num });
    console.log("dfdcghjvjhgv", verificationResult.status);

    if (verificationResult.status === 'approved') {
      try {
        await this.verifyPassword(userDto.plainTextPassword, userDto.password);
        userDto.password = paswrdhache;
        usa.role = Role.client;
        userDto.role = Role.client;
        
        await this.userRepoo.save(usa);
       return this.userService.create(userDto);
      }
      catch (error) {
        throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
      }
    }
    else {
      console.log("code non valide!! :p")
    }
  }

  //  return await verificationResult.status;




















  private _createToken({ username }: UserDto): any {
    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      accessToken,
    };
  }
  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.userService.findByPayload(payload);
    if (!user) {
      console.log("oki")
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }




























  // async  singUpverif(userDto:CreateUserDto):Promise<void>{

  //   let verificationResult;
  //     let code =userDto.code;
  //     let num=userDto.number;

  //      verificationResult = await twilio.verify.services(VERIFICATION_SID)
  //       .verificationChecks
  //       .create({ code, to: num });
  //       console.log("dfdcghjvjhgv",verificationResult.status);
  //       if (verificationResult.status === 'approved') {

  //    userDto.role=Role.client;

  //           await this.userService.create(userDto);

  //       }
  //       else {
  //           console.log("code non valide!! :p")
  //       }        
  //     return await verificationResult.status;

  //   }


}
