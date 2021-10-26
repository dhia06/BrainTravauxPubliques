import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { User } from "src/decorator/user.decorators";
import { UserPro } from "src/decorator/userPro.decorators";
import { UserEntity } from "src/entities/user.entity";
import { JwtAuthGuard } from 'src/Guards/jwt-auth.guard';
import { Projet } from "src/Model/projet.entity";

import { ProjetService } from "./projet.service";


@Controller('projet')
export class ProjetController {
  constructor(private readonly Service: ProjetService) { }

  @Put('update/:id')
  async update(@Param('id') id, @Body() prj: Projet): Promise<any> {
    prj.id = Number(id);
    return this.Service.update(prj);
  }


  // @Post('createe')
  // async createe(@Body() prj: Projet): Promise<Projet> {

  //   return this.Service.createe(prj);

  // }
/////////////////////////////////////
  @Post('dd')
  @UseGuards(JwtAuthGuard)
  async addCv(@Body() prj: Projet,@UserPro() kk: UserEntity): Promise<any> {
    return await this.Service.create(prj,kk);
  }


/////////////////////////





  //     @Post('create')
  //     @UseGuards(JwtAuthGuard)
  // async create(@Body() prj: Projet, @Req() request: Request): Promise<Projet> {
  //   const myuser= request.user;
  //   //let myuse= request.user;
  //   return this.Service.create(prj, myuser);

  // }


  // @Get('current')
  // async getCurrent(@Req() req) {
  //   return await this.Service.findById(req.user.id);
  // }









  @Get('/verify/:id')
  async findusById(@Param('id') id): Promise<any> {
    return await this.Service.findProjetById(id);
  }

  @Get('select')
  @UseGuards(JwtAuthGuard)
  async read(@User() kk: UserEntity): Promise<any> {

    return await this.Service.readAll(kk);
  }



  @Get('allprojects')
  // @UseGuards(JwtAuthGuard)
  async Projects(): Promise<any> {

    return await this.Service.AllProject();
  }
}