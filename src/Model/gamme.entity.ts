import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class GammeEntity  {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
 name: string;
}