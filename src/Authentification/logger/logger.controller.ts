

import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from 'src/Authentification/DTO/auth-credentials.dto';
import { AuthCredentials2Dto } from 'src/Authentification/DTO/auth-credentials2.dto';
import { UserP } from 'src/Model/user.entity';
import { UserService } from '../SignUp/user.service';
import { LoggerService } from './logger.service';
import * as bcrypt from 'bcrypt';
import { UserPr } from 'src/Model/UserPr.entity';
import { Role } from 'src/entities/role';
@Controller('/lo')
export class LoggerController {
  constructor( private loggerservice: LoggerService) {
  }



    //ajouter un utilisateur
    @Post('create')
    async create(@Body(ValidationPipe) user:UserPr, @Body(ValidationPipe) prof:UserP): Promise<any> {
  let paswrdhache = await this.loggerservice.hashPassword(user.password)
 user.password = paswrdhache;
  
      try {
      await this.verifyPassword(user.plainTextPassword, user.password);
     //user.plainTextPassword = paswrdhache;
     user.password = paswrdhache;
    prof.role=Role.professionnel;
    user.role=Role.professionnel;
    await  this.loggerservice.create(user)
    return this.loggerservice.createProff(prof)                               
      } catch (error) {
        throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
      }
  
    }


    @Post('/user')
    singUpverif (@Body() user:UserPr){

    this.loggerservice.create(user);
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
  // //ajouter un professionnel
  // @Post('create')
  // async create(@Body(ValidationPipe) user: User): Promise<User> {
  //   let paswrdhache = await this.loggerservice.hashPassword(user.password)
  //   user.password = paswrdhache;

  //   try {
  //     await this.verifyPassword(user.plainTextPassword, user.password);
  //     user.plainTextPassword = paswrdhache;
  //     return this.loggerservice.create(user);
  //   } catch (error) {
  //     throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
  //   }

  // }

  @Get('/get')
  async showAllUsers() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.loggerservice.showshow(),
    };
  }
 

  @Post('/signin')

 //la fonction de login de tous les users(pro-admin-client)
 async signIn(@Body(ValidationPipe) credantialsDto: AuthCredentials2Dto) {
  return await this.loggerservice.signIn2(credantialsDto);
}





  @Get('/hey')
  async showAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.loggerservice.getAll(),
    };
  }

}