
import { Controller, Get, Post, Put, Delete, Body, Param, ValidationPipe, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import * as Bcrypt from 'bcrypt';
import { UserService } from './user.service';
import { UserP } from 'src/Model/user.entity';
import express from 'express';



@Controller('/')
export class UsersController {
  plainTextPassword: string;
  //salt: string;
  constructor(private userService: UserService) {
  }


  @Get('/get/:id')
async finduserById(id: number) {
 return await this.userService.finduserById(id) 

  }

  private async verifyPassword(hashedPassword2: string, hashedPassword: string) {
    const isPasswordMatching = await Bcrypt.compare(
      hashedPassword2,
      hashedPassword
    );
    if (!isPasswordMatching) {
      console.log('one')
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  //ajouter un professionnel
  @Post('create')
  async create(@Body(ValidationPipe) user: UserP): Promise<UserP> {
    let paswrdhache = await this.userService.hashPassword(user.password)
    user.password = paswrdhache;

    try {
      await this.verifyPassword(user.plainTextPassword, user.password);
      user.plainTextPassword = paswrdhache;
      return this.userService.create(user);
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }

  }


  @Get('/get')
  async showAllUsers() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.userService.showAll(),
    };
  }
  

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.userService.delete(id);
  }


  @Put(':id/update')
  async updateEmail(@Param('id') id, @Body() user: UserP): Promise<any> {
    user.id = (id);

   if (user.confirmed = "non") {
    user.confirmed = "oui"
   }

 console.log("objet" + JSON.stringify(user))
  await this.userService.Verify(user)
   
 }







  @Put(':id/:email/update')
  async update(@Param('id') id, @Param('email') email, @Body() user: UserP): Promise<any> {
    user.id = (id);

    if (user.statut = "en attente") {
      user.statut = "approuvé"
    }
    user.email = email
    console.log("objet" + JSON.stringify(user))
    await this.userService.update(user)



  }




}