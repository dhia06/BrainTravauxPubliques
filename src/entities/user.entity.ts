// import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// import * as bcrypt from 'bcrypt';

// @Entity('user')
// export class UserEntity {  
//     @PrimaryGeneratedColumn('uuid') id: string;  
//     @Column({ 
//         type: 'varchar', 
//         // nullable: false, 
//         unique: true 
//     }) 
//     username: string;
//     @Column({ 
//         type: 'varchar', 
//         nullable: false 
//     }) 
//     password: string;  @Column({ 
//         type: 'varchar', 
//         nullable: false 
//     }) 
//     @Column()
//     phonenumber :string;
//     @Column()
//     email: string;
//     // @Column()
//     // salt: string;
//     // @Column({
//     //     type: 'enum',
//     //     enum: UserRoleEnum,
//     //     default: UserRoleEnum.USER
//     //   })
//     //   role: string;
//     // @BeforeInsert()  async hashPassword() {
//     //     this.password = await bcrypt.hash(this.password, this.salt);  
//     // }
// }