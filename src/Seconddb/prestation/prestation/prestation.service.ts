import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestation } from 'src/entities/pretation_vue.entity';

import { Repository } from 'typeorm';

@Injectable()
export class PrestationService {
    constructor(
      
        @InjectRepository(Prestation)
        private prestationRepository: Repository<Prestation>,
      
    ) { }
//methodes asynchrone de creation d'un service
    async create(Prestation: Prestation): Promise<any> {
    
        return await this.prestationRepository.save(Prestation);
    }
    //methodes asynchrone de get d'un service
    async  readAll(): Promise<Prestation[]> {
        
        return await this.prestationRepository.find()
    ;
    }
}
