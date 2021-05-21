import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskdEntity } from 'src/entities/taskd.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TaskdService {


    constructor(
        @InjectRepository(TaskdEntity)
        private taskdRepository: Repository<TaskdEntity>
    ) { }

    async create(taskd: TaskdEntity): Promise<TaskdEntity> {
        return await this.taskdRepository.save(taskd);
    }
    
    async  readAll(): Promise<TaskdEntity[]> {
        return await this.taskdRepository.find();
    }

    async update(taskd: TaskdEntity): Promise<UpdateResult> {

        return await this.taskdRepository.update(taskd.id,taskd);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.taskdRepository.delete(id);
    }


}
