import { AuthCredentials2Dto } from 'src/Authentification/DTO/auth-credentials2.dto';

import { BeforeInsert, EntityRepository, getConnection, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/Authentification/DTO/auth-credentials.dto';
import { UserPr } from 'src/Model/UserPr.entity';
import { Avoir } from 'src/entities/avoir.entity';
import { Projet } from 'src/Model/projet.entity';
import { any } from '@hapi/joi';
import { UserP } from 'src/Model/user.entity';

@EntityRepository(Avoir)
export class avoirRepository extends Repository<Avoir> {

kk:any;
 
  
    async fetch(P:Projet): Promise<any> {       
      return await this.kk== getConnection().query(`SELECT A.nom,AV.prix FROM avoir AV,accessoires A ,
       accessoires_projet AP,
    piece_projet PP,projet  P WHERE AV.accessoiresId=A.id 
       && AP.idaccessoiresvue=A.id && AP.idpiece=PP.id && PP.idprojet=`+P.id)
      
    }

async read1(user: UserP): Promise<any> {
   console.log("gyhghj",this.kk)
    return await this.kk.find({ where: {UserP:user}})
    
}

    
}