import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Rdv } from 'src/entities/Rdv.entity';
import { UserEntity } from 'src/entities/user.entity';
import { RdvService } from './rdv.service';

@Controller('rdv')
export class RdvController {

    constructor(private readonly rdvService: RdvService){
    }


//methode get des Rdvs
@Post('appoffre')
async Repondre(@Body() user:any): Promise<any> {

return this.rdvService.Repondreappdoffre(user)                               

}
    //ajouter un mail meet
    @Post('meet')
    async createe(@Body() user:any): Promise<any> {

    return this.rdvService.createe(user)                               
 
  
    }








    @Get()                                                                               
    read(): Promise<Rdv[]> {
      return this.rdvService.readAll();
    }


      //methode create des Rdv
    @Post('create')
    async create(@Body() services: Rdv): Promise<any> {
      return this.rdvService.create(services);
    }  
    //methode update des Rdvs
    @Put('update/:id_rdv')
    async update(@Param('id_rdv') id_rdv, @Body() services: Rdv): Promise<any> {
      services.id_rdv = Number(id_rdv);
        return this.rdvService.update(services);
    }  
     //methode supprimer pour les Rdvs
    @Delete(':id_rdv/delete')
    async delete(@Param('id_rdv') id_rdv): Promise<any> {
      return this.rdvService.delete(id_rdv);
    }








}
