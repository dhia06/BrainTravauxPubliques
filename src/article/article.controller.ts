import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticleEntity } from 'src/entities/article.entity';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService){
    }
    
    
    @Get()
    read(): Promise<ArticleEntity[]> {
      return this.articleService.readAll();
    }
    
    @Post('create')
    async create(@Body() article: ArticleEntity): Promise<any> {
      return this.articleService.create(article);
    }  
    
    @Put('update/:id')
    async update(@Param('id') id, @Body() article: ArticleEntity): Promise<any> {
        article.id = Number(id);
        return this.articleService.update(article);
    }  
    
    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.articleService.delete(id);
    }
    


}
