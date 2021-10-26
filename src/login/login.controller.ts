
import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, ValidationPipe } from '@nestjs/common';
import { LoggerService } from 'src/Authentification/logger/logger.service';
import { Role } from 'src/entities/role';
//import { User } from 'src/Model/user.entity';
import { UserPr } from 'src/Model/UserPr.entity';
import { CreateUserDto } from 'src/user/dto/CreateUser.dto';
import { LoginService } from './login.service';



@Controller('login')
export class LoginController {

    constructor(private readonly Service: LoginService) {}
        
    
    // @Get('current')
    // async getCurrent(@Req() req) {
    //   return await this.Service.findOneuser(req.user.id);
    // }


    
       
    @Post('register')  
    public register(@Body() createUserDto: CreateUserDto,@Body() usa:UserPr){    
        this.Service.register(createUserDto,usa);

    }
    
    @Post('/sigverif')
    public singUpverif (@Body() usa:UserPr,@Body()createUserDto:CreateUserDto,){
 // this.Service.creater(usa);
 //this.Service.singUpverifPr(user)
this.Service.singUpverif(usa,createUserDto)
 }

}





















  // @Post('/sigverif')
  // singUpverif (@Body()createUserDto:CreateUserDto){
  // //this.Service.create(user);
  // this.Service.singUpverif(createUserDto);
  // } 
  



