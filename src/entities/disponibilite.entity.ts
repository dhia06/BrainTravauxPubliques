

import { admin } from 'src/Model/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Disponibilte  {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  titre?: string;

  @Column()
  debut?: Date;

  @Column()
  fin?: Date;

  @Column()
  color?:string;
  
   //une disponibilité peut etre occupé par un seul admin

  // @ManyToOne(type => admin, 
  // (admin) => admin.Disponibilte,
  // {
  //   eager:true,
  //   onDelete:'CASCADE',
  //   onUpdate:'CASCADE',
  //   nullable:true
 
  // }
  // )
  // @JoinColumn(
  //   {name: "g_id"}
  // )
  // admin:admin[];
  
  
  

}



