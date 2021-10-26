import { AuthCredentials2Dto } from 'src/Authentification/DTO/auth-credentials2.dto';

import { BeforeInsert, EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/Authentification/DTO/auth-credentials.dto';
import { UserPr } from 'src/Model/UserPr.entity';
import { UserEntity } from 'src/entities/user.entity';

@EntityRepository(UserEntity)
export class UserEntityRepository extends Repository<UserEntity> {




  @BeforeInsert()
  async hashPassword(pswd) {
    const passwordk = await bcrypt.hash(pswd, 10);
    console.log("koukaaaaaaaaaaa",passwordk)
    return passwordk;
    //const isMatch =  await bcrypt.compare(pwd,hash)
  }


    


    
}