import { Body, Controller, Get, Post } from '@nestjs/common';
import { pieces } from 'src/entities/piece_vue.entity';

import { PiecesService } from './pieces.service';

@Controller('pieces')
export class PiecesController {
    constructor(private readonly PiecesService: PiecesService){
    }
//methode get des articles

    @Get()                                                                               
    read(): Promise<pieces[]> {
      return this.PiecesService.readAll();
    }
      //methode create des articles
    @Post('create')
    async create(@Body() piece: pieces): Promise<any> {
      return this.PiecesService.create(piece);
    }  
}
