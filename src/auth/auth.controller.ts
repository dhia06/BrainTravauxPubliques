// import { Body, Controller,  Post } from '@nestjs/common';
// import { RegistrationStatus } from 'src/interfaces/registration.status';
// import { CreateUserDto } from 'src/user/dto/CreateUser.dto';

// import { AuthService } from './auth.service';
// //nom de controlleur 'auth
// @Controller('auth')
// export class AuthController {
//     constructor(private readonly authService: AuthService) {}
//    //1er etape de Api de signup qui va nous envoyer un msg de comfirmation   
//     @Post('register')  
//     public async register(@Body() createUserDto: CreateUserDto,  ): Promise<void> {    
//        await this.authService.register(createUserDto);
       
//     }
//     //2em methode de Api de signup qui verife le code entré avec le code recu sur tel
//     @Post('/sigverif')
//     singUpverif (@Body()createUserDto:CreateUserDto){
//        this.authService.singUpverif(createUserDto);
//     } 

// }
  



