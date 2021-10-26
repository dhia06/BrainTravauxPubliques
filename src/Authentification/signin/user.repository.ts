import { EntityRepository, Repository } from 'typeorm';
import { ConflictException, HttpException, HttpStatus, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDto } from 'src/Authentification/DTO/auth-credentials.dto';
import { UserP } from 'src/Model/user.entity';
import { VerifyDto } from 'src/Authentification/DTO/verify.dto';
import * as bcrypt from 'bcrypt';
@EntityRepository(UserP)
export class UserPRepository extends Repository<UserP> {


  async findByEmail(email: string) {
    console.log("loook",email)
    return await UserP.findOne({where: {email: email },
    });
  }


  
  async checkPassword(email: string, password: string){
    var userFromDb = await this.findOne({ email: email});
    if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    return await bcrypt.compare(password, userFromDb.password);
}


  async hashPassword(pswd) {
    let password = await bcrypt.hash(pswd, 10);
    return password;
    //const isMatch =  await bcrypt.compare(pwd,hash)
  }

  async signIn(signInDTO: AuthCredentialsDto): Promise<UserP> {
    const user = await this.findOne({ email: signInDTO.email});
    if (user) {

      return user;
    } else {
      return user;
    }

  }



  async verify(ver: VerifyDto){
    const {email} = ver;

    const user = await UserP.findOne(ver);

    if (user) {
      return user;
    } else {
      return user;
    }

  }
}
