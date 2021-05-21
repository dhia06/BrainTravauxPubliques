import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GammeEntity } from 'src/entities/Gamme.entity';
import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
  imports :[TypeOrmModule.forFeature([GammeEntity])
],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule {}
