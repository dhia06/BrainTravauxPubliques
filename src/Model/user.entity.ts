import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as Bcrypt from 'bcrypt';

import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Role } from 'src/entities/role';
import { UserPr } from './UserPr.entity';
import { Avoir } from 'src/entities/avoir.entity';

@Entity('professionnel')
// @Unique(['email'])

export class UserP extends UserPr {

  @Column({
    default: 'non'
  })

  confirmed: string;

  @Column({

    default: 'en attente'
  })
  statut: string;




  // @Column()
  // plainTextPassword: string;


  @Column()
  role: Role.professionnel;


  @Column()
  registration: number;
  @Column()
  postal: number;
  @Column()
  company: string;
  @Column()
  bic: number;



  @OneToMany(() => Avoir, Avoir => Avoir.UserP)
  Avoir: Avoir[];

  public async verifyPassword(password) {
    const hashedPassword = await Bcrypt.hash(password, 10);
    return hashedPassword ;
  }
}
