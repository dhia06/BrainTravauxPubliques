import { AuthCredentials2Dto } from 'src/auth/DTO/auth-credentials2.dto';
import { Guser } from 'src/Model/guser.entity';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/auth/DTO/auth-credentials.dto';

@EntityRepository(Guser)
export class GuserRepository extends Repository<Guser> {



  async hashPassword(pswd) {
    let password = await bcrypt.hash(pswd, 10);
    return password;
    //const isMatch =  await bcrypt.compare(pwd,hash)
  }


    // async signIn1(signInDTO: AuthCredentials2Dto): Promise<Guser> {
    //     const {email, password,role} = signInDTO;
    
    //     const user = await Guser.findOne(signInDTO);
    
    //     if (user && await user.verifyPassword(password)) {
    //       return user;
    //     } else {
    //       return user;
    //     }
    
    //   }


    async signIn(signInDTO: AuthCredentials2Dto): Promise<Guser> {
      const {email, password} = signInDTO;
  
      const user = await Guser.findOne(signInDTO);
  
      const paswrdhache = await this.hashPassword(password)
      const isMatch = await bcrypt.compare( paswrdhache, user.password);
      if (user && isMatch) {
  
  
        return user;
      } else {
        return user;
      }
  
    }

    

    async signIn1(signInDTO: AuthCredentialsDto): Promise<Guser> {
      const {email, password} = signInDTO;
  
      const user = await Guser.findOne(signInDTO);
      
  
      // const paswrdhache = await this.hashPassword(password)
      // const isMatch = await bcrypt.compare( paswrdhache, user.password);
      if (user &&  await user.verifyPassword(password)) {
  
  
        return user;
      } else {
        return user;
      }
  
    }
    


    
}