import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notifications_entity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
  
    
  
  
  

}