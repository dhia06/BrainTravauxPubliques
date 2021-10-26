import { Controller, Get } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
link="http://localhost:4200/repondre/${id}";

@Get()
findOne() {
  return `This action returns a #${this.link} cat`;
}
}