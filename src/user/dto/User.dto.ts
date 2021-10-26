import { IsEmail, IsNotEmpty } from "class-validator";
import { Role } from "src/entities/role";

export class UserDto {  
    
    @IsNotEmpty()  
    username: string;
    @IsNotEmpty()  
    @IsEmail()  
    email: string;
    @IsNotEmpty()
    number: string;
    role?:Role.client
    
    
}
