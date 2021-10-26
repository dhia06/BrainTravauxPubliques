import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { accessoires } from 'src/entities/accessoires_vue.entity';

import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AccessiresService {
    constructor(
      
        @InjectRepository(accessoires)
        private accessoiresRepository: Repository<accessoires>,
      
    ) { }
//methodes asynchrone de creation d'un service
    async create(accessoires: accessoires): Promise<any> {
    
        return await this.accessoiresRepository.save(accessoires);
    }
    //methodes asynchrone de get d'un service
    async  readAll(): Promise<accessoires[]> {
        
        return await this.accessoiresRepository.find()
    ;
    }


    async update(acc: accessoires): Promise<UpdateResult> {

        return await this.accessoiresRepository.update(acc.id,acc);
    }
}
