import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessoiresProjet } from 'src/Model/AccessoiresProjet.entity';
import { PieceProjet } from 'src/Model/PieceProjet.entity';
import { Repository} from 'typeorm';

@Injectable()
export class PieceProjetService {

    constructor(@InjectRepository(PieceProjet)
        private PieceProjetRepository: Repository<PieceProjet>,
    

    ) { }

    async showshow(idprojet: number) {
        return await this.PieceProjetRepository.find( ({ where: { idprojet: idprojet }, }));
      }

    // async findPieceProjetByIdprojet(id: number): Promise<PieceProjet>{

    //     const pieceprojet = await this.PieceProjetRepository.findOne(id);
    //       return pieceprojet;
      
    //   }


    // async see(nom: string) {
    //     return await this.gammesRepository.findOne({ where: { nom: nom, }, })
    // }
    async findplz(idprojet: number,idpiecevue:number) {
        return await this.PieceProjetRepository.findOne({ where: { idprojet: idprojet,
            idpiecevue: idpiecevue }
         })
    }

    async create(acc: PieceProjet){
        return await this.PieceProjetRepository.save(acc);
      
     }
    //  async update(task: TaskEntity): Promise<UpdateResult> {

    //     return await this.taskRepository.update(task.id,task);
    // }
    // @Put(':id/update')
    // async update(@Param('id') id, @Body() task: TaskEntity): Promise<any> {
    //     task.id = Number(id);
    //     return this.taskservice.update(task);
    // }

     async  readAll(): Promise<PieceProjet[]> {
        return await this.PieceProjetRepository.find();
    }

}

