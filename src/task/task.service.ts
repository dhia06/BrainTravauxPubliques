import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/task.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>,
    

    ) { }



    async create(task: TaskEntity): Promise<any> {
       return await this.taskRepository.save(task);
     
    }
    
    async  readAll(): Promise<TaskEntity[]> {
        return await this.taskRepository.find();
    }

    async update(task: TaskEntity): Promise<UpdateResult> {

        return await this.taskRepository.update(task.id,task);
    }


    
    









    async delete(id): Promise<DeleteResult> {
        return await this.taskRepository.delete(id);
    }





}
