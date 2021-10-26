import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disponibilte } from 'src/entities/disponibilite.entity';
import {  DisponibilteController } from './disponibilite.controller';
import { DisponibilteService } from './disponibilite.service';


@Module({
  imports:[TypeOrmModule.forFeature([Disponibilte])],
  controllers: [DisponibilteController],
  providers: [DisponibilteService]
})
export class DisponibiliteModule {}
