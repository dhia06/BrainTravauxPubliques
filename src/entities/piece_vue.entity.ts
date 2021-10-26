import { PieceProjet } from 'src/Model/PieceProjet.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Prestation } from './pretation_vue.entity';
import { Types } from './Types.entity';


@Entity()
//cette entité n'est pas utilisé dans notre projet elle est implementé avec la template
export class pieces {

  //id/nom /sup
  @PrimaryGeneratedColumn()
  id: number;
// ggyiuuyr"_rtrçtrtjr
  @Column()
  nom: string;

  @Column()
  superficie?: string;
  @Column()
  unite?: string;

  @Column()
  quantite?: string;
  @Column()
  typeid:string;
  //relation manytoone chaque travail appartiet a un seul service
@ManyToOne(type => Types, 
    (Types) => Types.pieces,
    {
     
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
     //les traveaux peuvent etre vides
      nullable:true
   
    }
    )
    @JoinColumn(
      {name: "typeid"}
    )
    Types:Types[];



     // // relation 1 2 many service contient plusieurs travail
  @OneToMany(type => Prestation, 
    (Prestation) => Prestation.pieces,
    {
       
      onDelete:'CASCADE',
      nullable:true,
      eager:true,
    })
    Prestation: Prestation[];

 




    @OneToMany(type => PieceProjet, 
      (PieceProjet) => PieceProjet.pieces,
      {
        onDelete:"CASCADE",
        onUpdate:'CASCADE',
        nullable:true,
        cascade:true,
      })
      PieceProjet: PieceProjet[];
    
   
 }