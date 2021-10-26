import { Disponibilte } from "src/entities/disponibilite.entity";
import { Role } from "src/entities/role";
import { Column, Entity, OneToMany } from "typeorm";
import { UserPr } from "./UserPr.entity";

@Entity()
// @Unique(['email'])

export class admin extends UserPr {

    @Column()
    role :Role.admin;



    //relation one to many entre l'admin et la disponiblé 
// @OneToMany(type => Disponibilte, 
//     (Disponibilte) => Disponibilte.admin,
//     {
//        onDelete:"CASCADE",
//        onUpdate:'CASCADE',
//        nullable:true,
//        cascade:true
//     })
//     Disponibilte: Disponibilte[];
    
}