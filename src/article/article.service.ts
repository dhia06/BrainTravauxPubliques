import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/entities/article.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepository: Repository<ArticleEntity>
    ) { }
    async create(article: ArticleEntity): Promise<ArticleEntity> {
        return await this.articleRepository.save(article);
    }
    
    async  readAll(): Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }

    async update(article: ArticleEntity): Promise<UpdateResult> {

        return await this.articleRepository.update(article.id,article);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.articleRepository.delete(id);
    }



}
