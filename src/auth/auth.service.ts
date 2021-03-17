import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './DTO/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from './Interfaces/payload.interface';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
   
    private jwtService: JwtService
  ) {}
 
  async signIn(credentials: AuthCredentialsDto): Promise<PayloadInterface> {
    const user = await this.userRepository.signIn(credentials);
    if (user) {
      const payload = {email: user.email};
      const accessToken = await this.jwtService.sign(payload);
      localStorage.setItem('token',accessToken);
      return {accessToken};
     
    } else {
      
      throw new UnauthorizedException('Veuillez vérifier vos données!!!!!!!!!!');
    }
  }


   /*genSalt(rounds: number): Promise<string> {
    return this.authService.genSalt(rounds)
}*/

  /*async signUp(credentials: AuthCredentialsDto): Promise<{ email: string }> {
    return await this.userRepository.signUp(credentials);
  }*/
}
