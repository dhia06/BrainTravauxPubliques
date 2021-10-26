import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { accessoires } from './accessoires_vue.entity';
import { pieces } from './piece_vue.entity';


@Entity()
//cette entité n'est pas utilisé dans notre projet elle est implementé avec la template
export class Prestation {
  @PrimaryGeneratedColumn()
  id: number;
// ggyiuuyr"_rtrçtrtjr
  @Column()
  nom: string;

  @ManyToOne(type => pieces, 
    (pieces) => pieces.Prestation,
    {
     
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
     //les traveaux peuvent etre vides
      nullable:true
   
    }
    )
    @JoinColumn(
      {name: "piecesid"}
    )
    pieces:pieces[];





    

    @OneToMany(type => accessoires, 
        (accessoires) => accessoires.Prestation,
        {
           
        
          //qd on supprime un service tous les traveux seront supprimés 
          onDelete:'CASCADE',
         
      //les traveaux peuvent etre vides
          nullable:true,
          eager:true,
        })
        accessoires: accessoires[];
















  }