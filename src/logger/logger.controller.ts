

import { Body, Controller, Get, HttpStatus, Param, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from 'src/auth/DTO/auth-credentials.dto';
import { AuthCredentials2Dto } from 'src/auth/DTO/auth-credentials2.dto';
import { LoggerService } from './logger.service';

@Controller('/lo')
export class LoggerController {
  constructor( private loggerservice: LoggerService) {
  }



  @Post('/signin')

  //@UseGuards(RolesGuard)
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