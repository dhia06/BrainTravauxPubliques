import { Module } from '@nestjs/common';
import { ServicessService } from './servicess.service';
import { ServicessController } from './servicess.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from 'src/entities/servicet.entity';

@Module({
  imports :[TypeOrmModule.forFeature([ServiceEntity])
],
  providers: [ServicessService],
  controllers: [ServicessController]
})
export class ServicessModule {}
