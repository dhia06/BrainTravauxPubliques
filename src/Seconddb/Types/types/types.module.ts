import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Types } from 'src/entities/Types.entity';

import { TypesController } from './types.controller';
import { TypesRepository } from './types.repository';
import { TypesService } from './types.service';

@Module({
  imports :[TypeOrmModule.forFeature([Types]),
  TypeOrmModule.forFeature([TypesRepository]),
],
providers: [TypesService],
  controllers: [TypesController]
})
export class TypesModule {}
