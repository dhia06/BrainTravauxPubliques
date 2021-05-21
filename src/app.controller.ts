import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { Request } from 'express';
import { RolesGuard } from './auth/roles.guard';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@UseGuards(RolesGuard)
  getHello(): string {
 return this.appService.getHello();
  }

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {

    console.log("okkk")
    return HttpStatus.OK;
  }

  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      payload: req.user,
    };
  }
}
