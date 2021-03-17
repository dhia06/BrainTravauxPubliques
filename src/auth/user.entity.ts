import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as Bcrypt from 'bcrypt';
import { Task } from './task.entity';
import { Role } from './DTO/role';
@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  email: string;

  @Column()
  salt: string;

  @Column()
  password: string;

  @Column()
  role: Role;

  
  @OneToMany(
    type => Task,
    task => task.user,
    {eager: true})
  tasks: Task[];
  public async verifyPassword( password) {
    const hashedPassword = await Bcrypt.hash(password, parseInt(this.salt));
    return hashedPassword === this.password;
  }
}
