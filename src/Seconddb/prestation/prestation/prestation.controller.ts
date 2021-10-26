import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prestation } from 'src/entities/pretation_vue.entity';

import { PrestationService } from './prestation.service';

@Controller('prestation')
export class PrestationController {
    constructor(private readonly PrestationService: PrestationService){
    }
//methode get des articles

    @Get()                                                                               
    read(): Promise<Prestation[]> {
      return this.PrestationService.readAll();
    }
      //methode create des articles
    @Post('create')
    async create(@Body() Prestation: Prestation): Promise<any> {
      return this.PrestationService.create(Prestation);
    }  
}
