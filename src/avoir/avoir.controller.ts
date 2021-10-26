import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/decorator/user.decorators';
import { UserPro } from 'src/decorator/userPro.decorators';
import { Avoir } from 'src/entities/avoir.entity';
import { JwtAuthGuard } from 'src/Guards/jwt-auth.guard';
import { PieceProjet } from 'src/Model/PieceProjet.entity';
import { Projet } from 'src/Model/projet.entity';
import { UserP } from 'src/Model/user.entity';

import { AvoirService } from './avoir.service';

@Controller('avoir')
export class AvoirController {  constructor(private readonly avoirService: AvoirService){
}

//methode get des articles
@Get()
read(): Promise<Avoir[]> {
  return this.avoirService.readAll();
}
//methode create des articles
@Post('create')
@UseGuards(JwtAuthGuard)
async create(@Body() article: Avoir,@UserPro() kk :UserP): Promise<any> {
  return await this.avoirService.create(article,kk);
}  



@Put('all')
@UseGuards(JwtAuthGuard)
 async readit(@User() kk :UserP,@Body() P: Projet):Promise<any>{
    return await this.avoirService.read(kk,P);
  }






// @Get('all/:id')
// @UseGuards(JwtAuthGuard)
//  async readit(@UserPro() kk :UserP,@Param('id')id):Promise<Avoir[]>{
//   let P:Projet;
//    id=P.id;
//     return await this.avoirService.read(kk);
//   }


//methode update des articles
@Put('update/:id')


async update(@Param('id') id, 
@Body() article: Avoir,
//@Req() request:Request
): Promise<any> {
    article.id = Number(id);
    // console.log("monuser",request.user)
    return this.avoirService.update(article);
}  
//methode supprimer pour les articles
@Delete('delete/:id')
async delete(@Param('id') id): Promise<any> {
  return this.avoirService.delete(id);
}
}