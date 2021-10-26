import { Module } from '@nestjs/common';
import { PrestationService } from './prestation.service';
import { PrestationController } from './prestation.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestation } from 'src/entities/pretation_vue.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Prestation])
],
  providers: [PrestationService],
  controllers: [PrestationController]
})
export class PrestationModule {}
