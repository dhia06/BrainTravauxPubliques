import { IsEmail, IsNotEmpty } from "class-validator";
import { Role } from "src/entities/role";
import { BeforeInsert, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
@Unique(['email'])
@Unique(['username'])
export class CreateUserDto {


  @IsNotEmpty()
  number: string ;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  code?: string;
  role?: Role.client;
  plainTextPassword?:string;

  @BeforeInsert()  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);  
}


}

