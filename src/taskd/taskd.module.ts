import { Module } from '@nestjs/common';
import { TaskdService } from './taskd.service';
import { TaskdController } from './taskd.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskdEntity } from 'src/entities/taskd.entity';

@Module({
 imports: [TypeOrmModule.forFeature([TaskdEntity])
],
  providers: [TaskdService],
  controllers: [TaskdController]
})
export class TaskdModule {}
