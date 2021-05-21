import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntity } from 'src/entities/servicet.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ServicessService {
    constructor(
        @InjectRepository(ServiceEntity)
        private servicesRepository: Repository<ServiceEntity>
    ) { }

    async create(services: ServiceEntity): Promise<any> {
        return await this.servicesRepository.save(services);
    }
    
    async  readAll(): Promise<ServiceEntity[]> {
        return await this.servicesRepository.find();
    }

    async update(services: ServiceEntity): Promise<UpdateResult> {

        return await this.servicesRepository.update(services.id,services);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.servicesRepository.delete(id);
    }

}
