import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Types } from 'src/entities/Types.entity';
import { TypesService } from './types.service';

@Controller('/types')
export class TypesController {
    constructor(private readonly TypeService: TypesService){
    }
//methode get des articles

    @Get()                                                                               
    async read():Promise<any>  {
      return this.TypeService.readAll();
    }
 

      //methode create des articles
    @Post('create')
    async create(@Body() Types: Types): Promise<any> {
      return this.TypeService.create(Types);
    }  
}
