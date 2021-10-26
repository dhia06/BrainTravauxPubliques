import { Projet } from "src/Model/projet.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { UserEntity } from "./user.entity";

@Entity()
export class Rdv  {
  @PrimaryGeneratedColumn()
  id_rdv: number;


  @Column()
  titre?: string;
  @Column()
  email?: string;
  
  @Column()
  tel?: string;

  
  @Column()
  nomcl?: string;

  @Column(
    {default:'1995/06/20'}
  )
  date?: Date;


  @ManyToOne(type => UserEntity, 
    (UserEntity) => UserEntity.Rdv,
    {
      eager:true,
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
     //les traveaux peuvent etre vides
      nullable:true
   
    }
    )
    @JoinColumn(
      {name: "cl_id"}
    
    )
    UserEntity:UserEntity[];
    
    @ManyToOne(type => Projet, 
        (Projet) => Projet.Rdv,
        {
          eager:true,
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
          nullable:true
       
        }
        )
        @JoinColumn(
          {name: "pr_id"}
        )
        Projet:Projet[];
  

}