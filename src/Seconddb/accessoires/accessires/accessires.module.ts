import { Module } from '@nestjs/common';
import { AccessiresService } from './accessires.service';
import { AccessiresController } from './accessires.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { accessoires } from 'src/entities/accessoires_vue.entity';


@Module({
  imports :[TypeOrmModule.forFeature([accessoires])
],
  providers: [AccessiresService],
  controllers: [AccessiresController]
})
export class AccessiresModule {}
