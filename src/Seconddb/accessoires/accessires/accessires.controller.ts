import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { accessoires } from 'src/entities/accessoires_vue.entity';

import { AccessiresService } from './accessires.service';

@Controller('accessires')
export class AccessiresController {
    constructor(private readonly AccessService: AccessiresService){
    }
//methode get des articles

    @Get()                                                                               
    read(): Promise<accessoires[]> {
      return this.AccessService.readAll();
    }
      //methode create des articles
    @Post('create')
    async create(@Body() piece: accessoires): Promise<any> {
      return this.AccessService.create(piece);
    }

    

    @Put('update/:id')
    async update(@Param('id') id, @Body() acc: accessoires): Promise<any> {
        acc.id = Number(id);
        return this.AccessService.update(acc);
    }  

    
}
