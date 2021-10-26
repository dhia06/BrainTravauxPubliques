import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AccessoiresProjet } from 'src/Model/AccessoiresProjet.entity';
import { PieceProjet } from 'src/Model/PieceProjet.entity';
import { PieceProjetService } from './PieceProjet.service';


@Controller('PieceProjet')
export class PieceProjetController {


    constructor(private pieceprojetservice: PieceProjetService){
      }
  
      @Get('/get/:idprojet')
      async showAllPieceProjet(@Param('idprojet') idprojet) {
      return await this.pieceprojetservice.showshow(idprojet)
       
      }
      
      @Get('/find/:idprojet/:idpiecevue')
      async see(@Param('idprojet') idprojet,@Param('idpiecevue') idpiecevue): Promise<any> {
        return this.pieceprojetservice.findplz(idprojet,idpiecevue);
      }

      @Post('create')
      async create(@Param('idprojet') idprojet,@Param('idpiecevue') idpiecevue,@Body() prj: PieceProjet ) {
        prj.id=Number(idprojet);
         prj.id=Number(idprojet);
        return     this.pieceprojetservice.create(prj);     
      }

      @Put(':idprojet/:idpiecevue')
      async createe(@Param('idprojet') idprojet,@Param('idpiecevue') idpiecevue,@Body() prj: PieceProjet ) {
        prj.idprojet=Number(idprojet);
        prj.idpiecevue=Number(idpiecevue);
        return     this.pieceprojetservice.create(prj);     
      }
    //   async update(task: TaskEntity): Promise<UpdateResult> {

    //     return await this.taskRepository.update(task.id,task);
    // }
    // @Put(':id/update')
    // async update(@Param('id') id, @Body() task: TaskEntity): Promise<any> {
    //     task.id = Number(id);
    //     return this.taskservice.update(task);
    // }

      @Get()
      read(): Promise<PieceProjet[]> {
        return this.pieceprojetservice.readAll();
      }
    }