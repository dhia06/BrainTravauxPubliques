import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessoiresProjet } from 'src/Model/AccessoiresProjet.entity';
import { Repository} from 'typeorm';

@Injectable()
export class AccessoiresProjetService {

    constructor(@InjectRepository(AccessoiresProjet)
        private AccessoiresProjetRepository: Repository<AccessoiresProjet>,
    

    ) { }

    async showshow(idprojet: number) {
        return await this.AccessoiresProjetRepository.find( ({ where: { idprojet: idprojet }, }));
      }

      


    //   async showshow(idpiece: number) {
    //     return await this.AccessoiresProjetRepository.find( ({ where: { idpiece: idpiece }, }));
    //   }


    async create(acc: AccessoiresProjet){
        return await this.AccessoiresProjetRepository.save(acc);
      
     }

     async  readAll(): Promise<AccessoiresProjet[]> {
        return await this.AccessoiresProjetRepository.find();
    }

}

