import { EntityRepository, Repository } from 'typeorm';
import { UserP } from 'src/Model/user.entity';
import { VerifyDto } from 'src/Authentification/DTO/verify.dto';
import { Types } from 'src/entities/Types.entity';

@EntityRepository(Types)
export class TypesRepository extends Repository<Types> {
    
    async findb(nom: string) {
        return await Types.findOne({where: {  nom: nom}
        });
      }

    

  async verify(ver: VerifyDto){
    const {email} = ver;

    const user = await UserP.findOne(ver);

    if (user) {
      return user;
    } else {
      return user;
    }

  }
}
