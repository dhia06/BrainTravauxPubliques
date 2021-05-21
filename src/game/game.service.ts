import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GammeEntity } from 'src/entities/Gamme.entity';
import { DeleteResult, Repository ,UpdateResult} from 'typeorm';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(GammeEntity)
        private gammeRepository: Repository<GammeEntity>
    ) { }
    
    async create(gamme: GammeEntity): Promise<GammeEntity> {
        return await this.gammeRepository.save(gamme);
    }
    
    async  readAll(): Promise<GammeEntity[]> {
        return await this.gammeRepository.find();
    }
    
    async update(gamme: GammeEntity): Promise<UpdateResult> {
    
        return await this.gammeRepository.update(gamme.id,gamme);
    }
    
    async delete(id): Promise<DeleteResult> {
        return await this.gammeRepository.delete(id);
    }
    
    
    





}
