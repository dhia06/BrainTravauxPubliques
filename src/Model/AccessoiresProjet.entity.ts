
import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

import * as Bcrypt from 'bcrypt';
import { Role } from "src/entities/role";
import { PieceProjet } from "./PieceProjet.entity";
import { accessoires } from "src/entities/accessoires_vue.entity";
import { Projet } from "./projet.entity";

@Entity()
// @Unique(['username'])

export class AccessoiresProjet {

  @PrimaryGeneratedColumn()
  id: number;

  
  @Column()
  idpiece: number;
  @Column()
  idaccessoiresvue: number;

  // @Column()
  // idprojet: number;








 /* @ManyToOne(type => Projet,
    (Projet) => Projet.AccessoiresProjet,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      eager: true,
      nullable: true
  
    }    )
    @JoinColumn(
      {name:"idprojet"}   )
      
      Projet:Projet[];*/




@ManyToOne(type => PieceProjet,
    (PieceProjet) => PieceProjet.AccessoiresProjet,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      // eager: true,
      nullable: true
  
    }    )
    @JoinColumn(
      {name:"idpiece"}   )
      
      PieceProjet:PieceProjet[];



      @ManyToOne(type => accessoires,
        (accessoires) => accessoires.AccessoiresProjet,
        {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          eager: true,
          nullable: true
      
        }    )
        @JoinColumn(
          {name:"idaccessoiresvue"}   )
          
          accessoires:accessoires[];
    
    }