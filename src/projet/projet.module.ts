import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projet } from 'src/Model/projet.entity';
import { ProjetController } from './projet.controller';
import { ProjetService } from './projet.service';

@Module({
    imports :[TypeOrmModule.forFeature([Projet])
  ],
    controllers: [ProjetController],
    providers: [ProjetService]
  })
export class ProjetModule {}
