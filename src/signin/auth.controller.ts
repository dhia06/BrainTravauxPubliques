import { Body, Controller, Get, HttpStatus, Param, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from '../auth/DTO/auth-credentials.dto';
import { AuthService } from './auth.service';
import { PayloadInterface } from '../auth/Interfaces/payload.interface';
import { RolesGuard } from '../auth/roles.guard';
import { VerifyDto } from 'src/auth/DTO/verify.dto';
import { User } from 'src/Model/user.entity';
import { AuthCredentials2Dto } from 'src/auth/DTO/auth-credentials2.dto';

@Controller('/co')
export class AuthController {
  constructor(
    private authService: AuthService,

  ) {
  }

  // @Post('/signin')

  // async signIn(@Body(ValidationPipe) credantialsDto: AuthCredentialsDto) {
  //   return await this.authService.signIn(credantialsDto);
  // }

 

  










  @Post('/verify')
  async Verify(email: VerifyDto){
  
    
    return this.authService.Verify(email);

  } 


 
  @Get('/verify/:id')

  async findusById(@Param('id') id):Promise<any> {
    return await this.authService.findCvById(id);
  
}

@Get('/check/:email')

async findusByemail(@Param('email') email):Promise<any> {
  return await this.authService.findusByemail(email);
}





}


