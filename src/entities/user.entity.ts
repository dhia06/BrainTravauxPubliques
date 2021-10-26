import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Role } from "./role";
import { Rdv } from "./Rdv.entity";
import { Projet } from "src/Model/projet.entity";
import { UserPr } from "src/Model/UserPr.entity";


@Entity('client')
export class UserEntity extends UserPr
{  

    @Column()
    username: string;
    @Column({ 
        type: 'varchar', 
        nullable: false 
    }) 
    password: string; 


//  @Column({ 
//         type: 'varchar', 
//         nullable: false 
//     }) 


    @Column()
    number :string="";
    
    @Column()
    email: string;
    @Column()
  role: Role.client;

   @Column()
   plainTextPassword:string;

  
    // @BeforeInsert()  async hashPassword() {
    //     this.password = await bcrypt.hash(this.password, 12);  
    // }


    @OneToMany(() => Rdv, Rdv => Rdv.UserEntity)
    public Rdv!: Rdv[];


    @OneToMany(() => Projet, Projet => Projet.UserEntity)
    public Projet!: Projet[];


    @BeforeInsert()  async hashPassword() {
        this.password = await bcrypt.hash(this.password, 12);  
    }
}