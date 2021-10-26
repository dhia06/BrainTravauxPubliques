import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pieces } from 'src/entities/piece_vue.entity';

import { Repository } from 'typeorm';

@Injectable()
export class PiecesService {
    constructor(
      
        @InjectRepository(pieces)
        private piecesRepository: Repository<pieces>,
      
    ) { }
//methodes asynchrone de creation d'un service
    async create(pieces: pieces): Promise<any> {
    
        return await this.piecesRepository.save(pieces);
    }
    //methodes asynchrone de get d'un service
    async  readAll(): Promise<pieces[]> {
        
        return await this.piecesRepository.find()
    ;
    }
}
