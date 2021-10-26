import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avoir } from 'src/entities/avoir.entity';
import { AvoirController } from './avoir.controller';
import { avoirRepository } from './avoir.repository';
import { AvoirService } from './avoir.service';

@Module({
    imports :[TypeOrmModule.forFeature([Avoir]),

    TypeOrmModule.forFeature([avoirRepository]),
],
    controllers: [AvoirController],
    providers: [AvoirService],
})

export class AvoirModule {}

