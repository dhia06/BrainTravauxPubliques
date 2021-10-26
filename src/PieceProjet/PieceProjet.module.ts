import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessoiresProjet } from 'src/Model/AccessoiresProjet.entity';
import { PieceProjet } from 'src/Model/PieceProjet.entity';
import { PieceProjetController } from './PieceProjet.controller';
import { PieceProjetService } from './PieceProjet.service';


@Module({
  imports :[TypeOrmModule.forFeature([PieceProjet]),


],
  providers: [PieceProjetService],
  controllers: [PieceProjetController]
})
export class PieceProjetModule {}
