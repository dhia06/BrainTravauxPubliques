import { Body, Controller, Get, Post } from "@nestjs/common";
import { Projet } from "src/Model/projet.entity";
import { ProjetService } from "./projet.service";

@Controller('projet')
export class ProjetController {
    constructor(private readonly Service: ProjetService){
    }
    
    
    @Get('')
    async read(): Promise<Projet[]> {
      return this.Service.readAll();
    }
    
    @Post('create')

    
    async create(@Body() prj: Projet): Promise<Projet> {
      return this.Service.create(prj);
    }  
}