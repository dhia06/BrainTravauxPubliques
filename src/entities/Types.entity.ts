import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, BaseEntity } from 'typeorm';
import { Gammes } from './gamme_vue.entity';
import { pieces } from './piece_vue.entity';

@Entity()
//cette entité n'est pas utilisé dans notre projet elle est implementé avec la template
export class Types extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;
  @Column()
  gammeid: string;

  @ManyToOne(type => Gammes, 
    (Gammes) => Gammes.Types,
    {
     
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
     //les traveaux peuvent etre vides
      nullable:true
   
    }
    )
    @JoinColumn(
      {name: "gammeid"}
    )
    Gammes:Gammes[];


 // // relation 1 2 many service contient plusieurs travail
 @OneToMany(type => pieces, 
  (pieces) => pieces.Types,
  {
     
  
    //qd on supprime un service tous les traveux seront supprimés 
    onDelete:'CASCADE',
   
//les traveaux peuvent etre vides
    nullable:true,
    eager:true,
  })
  pieces: pieces[];

 
}