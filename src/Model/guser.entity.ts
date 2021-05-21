import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as Bcrypt from 'bcrypt';
@Entity()
@Unique(['username'])

export class Guser extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;  


  @Column()
  email: string;

  
  @Column()
  address: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  number: string;

  @Column()
  datedenaissance: Date;
  @Column()
  code?:string;
  


  public async verifyPassword(password) {
    const hashedPassword = await Bcrypt.hash(password,10);
    return hashedPassword === password;
  }
}
