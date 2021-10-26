import { any } from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import { ID } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { ppid } from 'node:process';
import { Avoir } from 'src/entities/avoir.entity';
import { PieceProjet } from 'src/Model/PieceProjet.entity';
import { Projet } from 'src/Model/projet.entity';
import { UserP } from 'src/Model/user.entity';

import { DeleteResult, getConnection, Repository, UpdateResult } from 'typeorm';
import { AvoirModule } from './avoir.module';

@Injectable()
export class AvoirService { constructor(
    @InjectRepository(Avoir)
    private avoirRepository: Repository<Avoir>,
){}



 //methodes asynchrone de creation d'un service
 async create( avoir: Avoir,user: UserP): Promise<Avoir> {

    let monproj = this.avoirRepository.create(avoir);
   monproj.UserP= user;
    return await this.avoirRepository.save(monproj);
}

//methodes asynchrone de get d'un service
async  readAll(): Promise<Avoir[]> {
    return await this.avoirRepository.find();
}


async read1(user: UserP): Promise<any> {
    return await this.avoirRepository.find({ where: {UserP:user}})
    
}

async read(user: UserP,P:Projet): Promise<any> {
    await this.avoirRepository.find({ where: {UserP:user}})
  return await  getConnection().query(`SELECT AR.name,AR.image,AR.unite,AV.prix,PP.nbr FROM avoir AV,accessoires A ,article_entity AR,
   accessoires_projet AP,
piece_projet PP WHERE A.articleEntityId=AR.id && AV.accessoiresId=A.id 
   && AP.idaccessoiresvue=A.id && AP.idpiece=PP.id && PP.idprojet=`+P.id +`&& AV.userPId=`+user.id)
  
}


// async read(user: UserP,P:Projet): Promise<any> {
//     await this.avoirRepository.find({ where: {UserP:user}})
//   return await  getConnection().query(`SELECT A.nom,AV.prix,PP.nbr FROM avoir AV,accessoires A ,
//    accessoires_projet AP,
// piece_projet PP WHERE AV.accessoiresId=A.id 
//    && AP.idaccessoiresvue=A.id && AP.idpiece=PP.id && PP.idprojet=`+P.id +`&& AV.userPId=`+user.id)
  
// }



// async read(user: UserP): Promise<Avoir[]> {
//     await this.avoirRepository.find({ where: {UserP:user}})

//    let P:Projet;
// let id=P.id;
//        return await getConnection().query(`SELECT A.nom,AV.prix FROM avoir AV,accessoires A ,
//        accessoires_projet AP,
//     piece_projet PP,projet  P WHERE AV.accessoiresId=A.id 
//        && AP.idaccessoiresvue=A.id && AP.idpiece=PP.id && PP.idprojet=` +id);   
//     }









//methodes asynchrone d update d'un service
async update(avoir: Avoir): Promise<UpdateResult> {

    return await this.avoirRepository.update(avoir.id,avoir);
}
//methodes asynchrone de supp d'un service
async delete(id): Promise<DeleteResult> {
    return await this.avoirRepository.delete(id);
}


}
