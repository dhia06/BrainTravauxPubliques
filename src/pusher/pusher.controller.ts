import { string } from '@hapi/joi';
import { Body, Controller, Post } from '@nestjs/common';
import { PusherService } from './pusher.service';

@Controller('pusher')
export class PusherController {
    constructor(private PusherService: PusherService){}

    @Post('message')
    async message(@Body("username") username:string,@Body("message") message:string)   {
        await this.PusherService.trigger("chat","message",{username,message})
        return [];
    }


    @Post('message2')
    async message2(@Body("username") username:string,@Body("message") message:string)   {
        await this.PusherService.trigger2("chat","message",{username,message})
        return [];
    }



}
