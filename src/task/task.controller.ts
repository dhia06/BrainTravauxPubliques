import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskEntity } from 'src/entities/task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {




    constructor(private taskservice: TaskService,
    
        ){
      }
  
      @Get()
      read(): Promise<TaskEntity[]> {
        return this.taskservice.readAll();
      }
      
      @Post('create')
      async create(@Body() task: TaskEntity ): Promise<any> {
        return     this.taskservice.create(task);
                 
         
      }
     
      @Put(':id/update')
      async update(@Param('id') id, @Body() task: TaskEntity): Promise<any> {
          task.id = Number(id);
          return this.taskservice.update(task);
      }  
      
      @Delete(':id/delete')
      async delete(@Param('id') id): Promise<any> {
        return this.taskservice.delete(id);
      }
  
  
  
}
