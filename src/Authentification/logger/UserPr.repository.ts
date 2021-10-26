import { AuthCredentials2Dto } from 'src/Authentification/DTO/auth-credentials2.dto';

import { BeforeInsert, EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/Authentification/DTO/auth-credentials.dto';
import { UserPr } from 'src/Model/UserPr.entity';

@EntityRepository(UserPr)
export class UserPrRepository extends Repository<UserPr> {


  @BeforeInsert()
  async hashPassword(pswd) {
    const passwordk = await bcrypt.hash(pswd, 10);
    console.log("koukaaaaaaaaaaa",passwordk)
    return passwordk;
    //const isMatch =  await bcrypt.compare(pwd,hash)
  }




  // async checkPasswordg(email: string, password: string){
  //   var userFromDb = await this.userRepository.findOne({ email: email});
  //   if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
  //   return await bcrypt.compare(password, userFromDb.password);
  // }

  
  
    async signIn(signInDTO: AuthCredentials2Dto): Promise<any> {
      const {email, password} = signInDTO;
  
      var user = await UserPr.findOne(email);
  
    //  const paswrdhache = await this.hashPassword(password)
   //   const isMatch = await bcrypt.compare( paswrdhache, user.password);
      console.log("je suis icii")
      if (user) {
        console.log("je suis laaaaaaaaaaaa")
  
        return user;}
      // } else {
      //   return user;
      // }
  
    }
    // public async verifyPassword(password) {
    //   const hashedPassword = await Bcrypt.hash(password, 10);
    //   return hashedPassword === password;
    // }
    

    async signIn1(signInDTO: AuthCredentialsDto){
      const {email, password} = signInDTO;
      const user = await UserPr.findOne(signInDTO);
      console.log("je suis icii")
      if (await user.verifyPassword(password)) {
        console.log("je suis laa")
          return user;
      } else {
        return user;
      }
  
    }
    


    
}