import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceEntity } from './servicet.entity';
import { TaskdEntity } from './taskd.entity';

@Entity()
export class TaskEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  travailname: string;
  
@Column()
serviceid:number;
//   //relation manytoone chaque travail appartiet a un seul service
  @ManyToOne(type => ServiceEntity, 
  (ServiceEntity) => ServiceEntity.TaskEntity,
  {
  //  eager:true,
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
   //les traveaux peuvent etre vides
    nullable:true
 
  }
  )
  @JoinColumn(
    {name: "serviceid"}
  )
  ServiceEntity:ServiceEntity[];
 
 
 
 
 @OneToMany(type => TaskdEntity, 
  (TaskdEntity) => TaskdEntity.TaskEntity,
  {
     //qd on supprime un service tous les traveux seront supprimés 
     onDelete:"CASCADE",
     onUpdate:'CASCADE',
     //les traveaux peuvent etre vides
     nullable:true,
     cascade:true,
     eager:true
  })
  TaskdEntity: TaskdEntity[];


 
}