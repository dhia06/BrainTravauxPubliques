import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Types } from 'src/entities/Types.entity';


import { Repository } from 'typeorm';
import { TypesRepository } from './types.repository';


@Injectable()
export class TypesService {
    constructor(
        @InjectRepository(Types)
        private typeRepository: TypesRepository
      
    ) { }
//methodes asynchrone de creation d'un service
    async create(Types: Types): Promise<any> {
       
        return await this.typeRepository.save(Types);
    }
    //methodes asynchrone de get d'un service
  
    async readAll(): Promise<any> {
        
      return await this.typeRepository.findOne();
    
    }
}
