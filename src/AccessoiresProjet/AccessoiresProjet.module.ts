import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessoiresProjet } from 'src/Model/AccessoiresProjet.entity';
import { AccessoiresProjetController } from './AccessoiresProjet.controller';
import { AccessoiresProjetService } from './AccessoiresProjet.service';

@Module({
  imports :[TypeOrmModule.forFeature([AccessoiresProjet]),


],
  providers: [AccessoiresProjetService],
  controllers: [AccessoiresProjetController]
})
export class AccessoiresProjetModule {}
