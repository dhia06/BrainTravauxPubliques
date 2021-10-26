import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { empty } from 'rxjs';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { Gammes } from 'src/entities/gamme_vue.entity';
import { Types } from 'src/entities/Types.entity';

import { Connection, createConnection, DeleteResult, EntityManager, getConnection, getManager, Repository, UpdateResult } from 'typeorm';


@Injectable()
export class GammesService {

    constructor(

        @InjectRepository(Gammes)
        private gammesRepository: Repository<Gammes>,
        

    ) { }

    async readAll(): Promise<Gammes[]> {
        return await this.gammesRepository.find()

    }

    
    async see(nom: string) {
        return await this.gammesRepository.findOne({ where: { nom: nom, }, })
    }


    async see2() {
        // const user = await this.gammesRepository.findOne({ where: { nom: nom, }, })
        // && G.nom = ?1
        return await getConnection().query(`SELECT G.nom,T.nom FROM Gammes G,Types T WHERE G.id = T.gammeid `);


        

    }








    //methodes asynchrone de creation d'un service
    async create(Gammes: Gammes): Promise<any> {

        return await this.gammesRepository.save(Gammes);
    }

    //methodes asynchrone d update d'un service
    async update(Gammes: Gammes): Promise<UpdateResult> {

        return await this.gammesRepository.update(Gammes.id, Gammes);
    }
    //methodes asynchrone de supp d'un service
    async delete(id): Promise<DeleteResult> {
        return await this.gammesRepository.delete(id);
    }














}
