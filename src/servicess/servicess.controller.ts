import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceEntity } from 'src/entities/servicet.entity';
import { ServicessService } from './servicess.service';

@Controller('servicess')
export class ServicessController {
    constructor(private readonly servicesService: ServicessService){
    }


    @Get()                                                                               
    read(): Promise<ServiceEntity[]> {
      return this.servicesService.readAll();
    }
    
    @Post('create')
    async create(@Body() services: ServiceEntity): Promise<any> {
      return this.servicesService.create(services);
    }  
    
    @Put('update/:id')
    async update(@Param('id') id, @Body() services: ServiceEntity): Promise<any> {
      services.id = Number(id);
        return this.servicesService.update(services);
    }  
    
    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.servicesService.delete(id);
    }





}
