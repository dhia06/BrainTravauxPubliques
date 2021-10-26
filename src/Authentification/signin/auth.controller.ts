import { Body, Controller, Get, HttpStatus, Param, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { VerifyDto } from 'src/Authentification/DTO/verify.dto';

@Controller('/co')
export class AuthController {
  constructor(
    private authService: AuthService, ) { }
  @Post('/verify')
  async Verify(email: VerifyDto){
    return this.authService.Verify(email);}

 

  @Get('/detail-pro/:id')

  async findProById(@Param('id') id):Promise<any> {
    return await this.authService.findProfById(id);  
}

@Get('/check/:email')

async findusByemail(@Param('email') email):Promise<any> {
  return await this.authService.findusByemail(email);
}





}


