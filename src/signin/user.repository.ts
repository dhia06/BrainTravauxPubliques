import { EntityRepository, Repository } from 'typeorm';
import { ConflictException, HttpException, HttpStatus, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDto } from 'src/auth/DTO/auth-credentials.dto';
import { User } from 'src/Model/user.entity';
import { VerifyDto } from 'src/auth/DTO/verify.dto';

import * as bcrypt from 'bcrypt';
import { AuthCredentials2Dto } from 'src/auth/DTO/auth-credentials2.dto';
@EntityRepository(User)
export class UserRepository extends Repository<User> {


  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
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

  async signIn(signInDTO: AuthCredentialsDto): Promise<User> {
    // const {email, password} = signInDTO;
    // const user = await User.findOne(signInDTO);

    const user = await this.findOne({ email: signInDTO.email});
    if (user) {

      return user;
    } else {
      return user;
    }

  }



  async verify(ver: VerifyDto){
    const {email} = ver;

    const user = await User.findOne(ver);

    if (user) {
      return user;
    } else {
      return user;
    }

  }
}
