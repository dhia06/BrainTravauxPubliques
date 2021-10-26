//import { GammeEnum } from 'src/enums/gamme';

//import { GammeEnum } from 'src/enum/gamme';
import { GammeEnum } from 'src/Model/gamme';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import { TaskEntity } from './task.entity';
 //import { TaskEntity } from './task.entity';


@Entity()
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameservice: string;

  @Column({
    type: 'enum',
    enum: GammeEnum,
 //   default: GammeEnum.Normal
  })
  categorie: string; 
  
  // // relation 1 2 many service contient plusieurs travail
  @OneToMany(type => TaskEntity, 
    (TaskEntity) => TaskEntity.ServiceEntity,
    {
       //boolean qui est chargé tjrs a trus:si on demande un traveux on trouve le service associes
    
    //  cascade:true,
      //qd on supprime un service tous les traveux seront supprimés 
      onDelete:'CASCADE',
      //onUpdate:'CASCADE',
     // cascade:true,
  //les traveaux peuvent etre vides
      nullable:true,
  eager:true
    })
  TaskEntity: TaskEntity[];


  
 
}