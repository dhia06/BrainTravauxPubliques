import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Disponibilte } from 'src/entities/disponibilite.entity';
import { DisponibilteService } from './disponibilite.service';


@Controller('disponibilte')
export class DisponibilteController { 

    constructor(private readonly dispoService: DisponibilteService){
    }
//methode get des articles

    @Get()                                                                               
    read(): Promise<Disponibilte[]> {
      return this.dispoService.readAll();
    }
      //methode create des articles
    @Post('create')
    async create(@Body() services: Disponibilte): Promise<any> {
      return this.dispoService.create(services);
    }  
    //methode update des articles
    @Put('update/:id')
    async update(@Param('id') id, @Body() services: Disponibilte): Promise<any> {
      services.id = Number(id);
        return this.dispoService.update(services);
    }  
     //methode supprimer pour les articles
    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.dispoService.delete(id);
    }







}
