import { Module } from '@nestjs/common';
import { GammesService } from './gammes.service';
import { GammesController } from './gammes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';
import { Gammes } from 'src/entities/gamme_vue.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Gammes]),
],
  providers: [GammesService
  ],
  controllers: [GammesController]
})
export class GammesModule {}
/*    {
      provide: GammesService,
      useFactory: (db1: Connection) => {
        return new GammesService(db1);
      },
      inject: [getConnectionToken('db1')],
    },
*/ 