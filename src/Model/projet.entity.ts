
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Projet {
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

  constructor() {


    }



}