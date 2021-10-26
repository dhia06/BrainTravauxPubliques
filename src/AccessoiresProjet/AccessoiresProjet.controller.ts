import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AccessoiresProjet } from 'src/Model/AccessoiresProjet.entity';
import { AccessoiresProjetService } from './AccessoiresProjet.service';

@Controller('AccProjet')
export class AccessoiresProjetController {


    constructor(private accessoiresprojetservice: AccessoiresProjetService){
      }
  

      // @Get('/get/:idpiece')
      // async showAllPieceProjet(@Param('idpiece') idpiece): Promise<AccessoiresProjet[]> {
      // return await this.accessoiresprojetservice.showshow(idpiece)
       
      // }


       
      @Get('/get/:idprojet')
      async showAllPieceProjet(@Param('idprojet') idprojet) {
      return await this.accessoiresprojetservice.showshow(idprojet)
       
      }

      // @Get('/get/:nom')
      // async showAllPieceProjet(@Param('nom') nom):Promise<any> {
      // return await this.accessoiresprojetservice.showshow(nom)
       
      // }

      // @Post('create')
      // async create(@Body() acc: AccessoiresProjet ) {
      //   return     this.accessoiresprojetservice.create(acc);     
      // }



      @Put(':idpiece/:idaccessoiresvue')
      async create(@Param('idpiece') idpiece,@Param('idaccessoiresvue') idaccessoiresvue,@Body() acc: AccessoiresProjet ) {
        acc.idpiece=Number(idpiece);
        acc.idaccessoiresvue=Number(idaccessoiresvue);
        return     this.accessoiresprojetservice.create(acc);     
      }
    


      @Get('/get')
      read(): Promise<AccessoiresProjet[]> {
        return this.accessoiresprojetservice.readAll();
      }
    }