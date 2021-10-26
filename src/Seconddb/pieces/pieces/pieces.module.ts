import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pieces } from 'src/entities/piece_vue.entity';

import { PiecesController } from './pieces.controller';
import { PiecesService } from './pieces.service';

@Module({ imports :[TypeOrmModule.forFeature([pieces])
],
  controllers: [PiecesController],
  providers: [PiecesService]
})
export class PiecesModule {}
