import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskdEntity } from 'src/entities/taskd.entity';
import { TaskdService } from './taskd.service';

@Controller('taskd')
export class TaskdController {

    constructor(private readonly taskdService: TaskdService){
    }
    @Get()
    read(): Promise<TaskdEntity[]> {
      return this.taskdService.readAll();
    }
    
    @Post('create')
    async create(@Body() taskd: TaskdEntity): Promise<any> {
      return this.taskdService.create(taskd);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() taskd: TaskdEntity): Promise<any> {
      taskd.id = Number(id);
        return this.taskdService.update(taskd);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.taskdService.delete(id);
    }



}
