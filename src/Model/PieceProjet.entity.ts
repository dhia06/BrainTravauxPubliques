
import { pieces } from 'src/entities/piece_vue.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, BaseEntity } from 'typeorm';
import { AccessoiresProjet } from './AccessoiresProjet.entity';
import { Projet } from './projet.entity';


@Entity()
export class PieceProjet extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

// @Column()
// desc:string;
  @ManyToOne(type => Projet,
    (projet) => projet.PieceProjet,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      eager: true,
      nullable: true
  
    }    )
    @JoinColumn(
      {name:"idprojet"}   )
      
      Projet:Projet[];


      @Column()
      idprojet: number;
      @Column()
      idpiecevue: number;


      @Column()
      nbr: number;



      // @Column()
      // nompiece: string;



      @ManyToOne(type => pieces,
        (pieces) => pieces.PieceProjet,
        {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          eager: true,
          nullable: true
      
        }    )
        @JoinColumn(
          {name:"idpiecevue"}   )
          
          pieces:pieces[];
    




      @OneToMany(type => AccessoiresProjet, 
        (AccessoiresProjet) => AccessoiresProjet.PieceProjet,
        {
          onDelete:"CASCADE",
          onUpdate:'CASCADE',
          eager: true,
          nullable:true,
          // cascade:true,
        })
        AccessoiresProjet: AccessoiresProjet[];
  }
