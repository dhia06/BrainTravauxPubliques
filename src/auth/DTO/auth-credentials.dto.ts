import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "./role";


export class AuthCredentialsDto {
   
  @IsNotEmpty()
  @MinLength(4)
  @IsString()
  @MaxLength(20)
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)

   
  
  password: string;

  
}
