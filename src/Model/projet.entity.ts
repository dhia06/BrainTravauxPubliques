
import { Rdv } from 'src/entities/Rdv.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity} from 'typeorm';
import { PieceProjet } from './PieceProjet.entity';

@Entity()
export class Projet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;
    
  @Column()
  extension: string;
    
  @Column()
  surface: string;

  @Column()
  gamme: string;

  @Column()
  typebien: string;

  @Column()
  delai: string;


  // @Column()
  // userEntityId:number;

  @Column({default:'img8.jpg'})
  path?: string;


                   
  @ManyToOne(() => UserEntity, UserEntity => UserEntity.Projet,
  {
    nullable: true,
    cascade: true,
    onDelete:'CASCADE',
             
        eager:true,
  }
)
  public UserEntity: UserEntity;



  

    @OneToMany(type => PieceProjet, 
      (PieceProjet) => PieceProjet.Projet,
      {
        onDelete:"CASCADE", 
        onUpdate:'CASCADE',
        nullable:true,
        cascade:true,
      })
      PieceProjet: PieceProjet[];



      @OneToMany(() => Rdv, Rdv => Rdv.Projet)
      public Rdv!: Rdv[];

 
  
              @Column({
                default: 0
                 }) 
              Devis?:number;


 
  
}


