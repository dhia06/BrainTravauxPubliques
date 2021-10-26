import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
 import {  ArticleEntity } from './article.entity';
import { TaskEntity } from './task.entity';
@Entity()
export class TaskdEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dtname: string;
  
  @Column()
  description: string;



  @Column()
  travailid:number;
  
  @ManyToOne(type => TaskEntity, 
    (TaskEntity) => TaskEntity.TaskdEntity,
    {
    //  eager:true,
     //  onDelete:'CASCADE',
      onUpdate:'CASCADE',
        //les traveaux peuvent etre vides
      nullable:true,
    }    )  
    @JoinColumn(
    {name:"travailid"}   )
    
    TaskEntity:TaskEntity[];


   @OneToMany(type => ArticleEntity, 
    (ArticleEntity) => ArticleEntity.TaskdEntity,
    {
      //qd on supprime un service tous les traveux seront supprimés 
      onDelete:"CASCADE",
      onUpdate:'CASCADE',
      //les traveaux peuvent etre vides
      nullable:true,
      cascade:true,
      eager:true
    })
    ArticleEntity: ArticleEntity[];
  
 
}