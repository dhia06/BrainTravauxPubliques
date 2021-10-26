import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notifications_entity } from 'src/entities/notification.entity';
import { NotificationController } from './notifications.controller';

import { NotificationService } from './notifications.service';


@Module({
  imports :[TypeOrmModule.forFeature([Notifications_entity])],
  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationsModule {}

