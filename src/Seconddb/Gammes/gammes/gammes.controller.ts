import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Gammes } from 'src/entities/gamme_vue.entity';

import { GammesService } from './gammes.service';

@Controller('gammess')
export class GammesController {

  constructor(private readonly GammesService: GammesService) {
  }
  @Get('/see/:nom')
  async see(@Param('nom') nom): Promise<any> {
    return this.GammesService.see(nom);
  }


  @Get('/see2')
  async see2(): Promise<any> {
    return this.GammesService.readAll();
  }


  @Get()
  async read(): Promise<any> {
    return this.GammesService.readAll();
  }

  @Post('create')
  async create(@Body() services: Gammes): Promise<any> {
    return this.GammesService.create(services);
  }


  @Put('update/:id')
  async update(@Param('id') id, @Body() services: Gammes): Promise<any> {
    services.id = Number(id);
    return this.GammesService.update(services);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.GammesService.delete(id);
  }




}
