import { BaseEntity, BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

import * as Bcrypt from 'bcrypt';
import { Role } from "src/entities/role";


@Entity()
// @Unique(['username'])

export class UserPr extends BaseEntity {


  @BeforeInsert()
  public async verifyPassword(password) {
    const hashedPassword = await Bcrypt.hash(password, 12);
    return hashedPassword ;
  }
  @PrimaryGeneratedColumn()
  id?: number;


  @Column()
  password: string;


  @Column(
    {default:'linouchaa'}
  )
  plainTextPassword ?: string;


  @Column({
    type: 'enum',
    enum: Role,
  
  })
  role: Role;



  @Column()
  email: string;
  @Column(
    {default:'rue xxxx'}
  )
  address?: string="";

  @Column(
    {default:'omar'}
  )
  firstname?: string="";

  @Column(
    {default:'Sfar'}
  )
  lastname?: string="";

  @Column()
  number: string;

  @Column(
    {default:'1995/06/20'}
  )
  datedenaissance?: Date;


  


 
  // @OneToMany(type => Projet, 
  //   (Projet) => Projet.UserPr,
  //   {
  //     onDelete:"CASCADE",
  //     onUpdate:'CASCADE',
  //     nullable:true,
  //     cascade:true,
  //   })
  //   Projet: Projet[];


  //   @OneToMany(() => Avoir, Avoir => Avoir.guser)
  // public Avoir: Avoir[];
// @BeforeInsert()
//   public async verifyPassword(password) {
//     const hashedPassword = await Bcrypt.hash(password, 12);
//     return hashedPassword ;
//   }
  
  @BeforeInsert()  async hashPassword() {
    const salt =await Bcrypt.genSalt();
    this.password = await Bcrypt.hash(this.password, 12);  
}
}
















