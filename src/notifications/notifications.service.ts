import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notifications_entity } from 'src/entities/notification.entity';
//import {  Notifications_entity } from 'src/entities/notification.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class NotificationService {

    constructor(
        @InjectRepository(Notifications_entity)
        private notifRepository: Repository<Notifications_entity>
    ) { }







//methodes asynchrone de creation d'un service
    async create(dispo: Notifications_entity): Promise<any> {
        return await this.notifRepository.save(dispo);
    }
    //methodes asynchrone de get d'un service
    async  readAll(): Promise<Notifications_entity[]> {
        return await this.notifRepository.find();
    }
//methodes asynchrone d update d'un service
    async update(dispo: Notifications_entity): Promise<UpdateResult> {

        return await this.notifRepository.update(dispo.id,dispo);
    }
//methodes asynchrone de supp d'un service
    async delete(@Param('id')id): Promise<DeleteResult> {
        return await this.notifRepository.delete(id);
    }

}
// async findplz(idprojet: number,idpiecevue:number) {
//     return await this.PieceProjetRepository.findOne({ where: { idprojet: idprojet,
//         idpiecevue: idpiecevue }
//      })
// }