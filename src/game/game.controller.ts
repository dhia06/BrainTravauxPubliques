import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GammeEntity } from 'src/entities/Gamme.entity';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(private readonly gammeService: GameService){
    }
    
    
    @Get('')
    async read(): Promise<GammeEntity[]> {
      return this.gammeService.readAll();
    }
    
    @Post('create')

    
    async create(@Body() gamme: GammeEntity): Promise<GammeEntity> {
      return this.gammeService.create(gamme);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() gamme: GammeEntity): Promise<any> {
        gamme.id = Number(id);
        return this.gammeService.update(gamme);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.gammeService.delete(id);
    }
    
}
