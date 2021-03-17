
import { Controller, Get, Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { UserService } from 'src/services/user/user.service';



@Controller('/')
export class UsersController {

  

    constructor(private userService: UserService){
    }  
    @Post('create')
    async create(@Body() user: User): Promise<User> {
      console.log('<<<<<user.name:'+user.email)
      let paswrdhache;
      paswrdhache = await this.userService.hashPassword(user.password)
      console.log("paswrdhache"+paswrdhache)
      user.password = paswrdhache;
     // user.role = 'ROLE_USER';
      return this.userService.create(user);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() user: User): Promise<any> {
        user.id = Number(id);
        return this.userService.update(user);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.userService.delete(id);
    }
   
}