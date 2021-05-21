import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as Bcrypt from 'bcrypt';

import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Role } from 'src/auth/DTO/role';

@Entity()
@Unique(['email'])

export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({
    default: 1
  })
  salt: string;

  @Column({
    default:'non'})

  confirmed:string;
 
  @Column({

    default: 'en attente'
  })
  statut: string;



  @Column()
  password: string;

  @Column()
  plainTextPassword: string;

  @Column({
    // type: 'enum',
    // enum: Role,
    default: "professionnel"
  })
  role: string;
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
  registration: number;
  @Column()
  postal: number;
  @Column()
  company: string;
  @Column()
  bic: number;



  public async verifyPassword(password) {
    const hashedPassword = await Bcrypt.hash(password, 10);
    return hashedPassword === password;
  }
}
