import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Disponibilte } from 'src/entities/disponibilite.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class DisponibilteService {

    constructor(
        @InjectRepository(Disponibilte)
        private dispoRepository: Repository<Disponibilte>
    ) { }
//methodes asynchrone de creation d'un service
    async create(dispo: Disponibilte): Promise<any> {
        return await this.dispoRepository.save(dispo);
    }
    //methodes asynchrone de get d'un service
    async  readAll(): Promise<Disponibilte[]> {
        return await this.dispoRepository.find();
    }
//methodes asynchrone d update d'un service
    async update(dispo: Disponibilte): Promise<UpdateResult> {

        return await this.dispoRepository.update(dispo.id,dispo);
    }
//methodes asynchrone de supp d'un service
    async delete(@Param('id')id): Promise<DeleteResult> {
        return await this.dispoRepository.delete(id);
    }







}
