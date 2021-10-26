import { Injectable } from '@nestjs/common';
import  * as Pusher from 'pusher';

@Injectable()
export class PusherService {
    pusher:Pusher;
    pusher2:Pusher;
    constructor(){
    this.pusher = new Pusher({
            // appId: "1233932",
            // key: "b87a4b9b5c6824a2342f",
            // secret: "813c80f42f0f29bc9c6a",
            // cluster: "mt1",
            // useTLS: true,

            appId: "1258861",
            key: "6a297c565ec2aaf6878b",
            secret: "51f03b93f6ce436733d9",
            cluster: "eu",
            useTLS: true
          });


          this.pusher2 = new Pusher({
            appId: "1233932",
            key: "b87a4b9b5c6824a2342f",
            secret: "813c80f42f0f29bc9c6a",
            cluster: "mt1",
            useTLS: true
    
          });
    }



  async   trigger(channel :string,event:string,data:any)  {
        await this.pusher.trigger(channel,event,data);
      };


      async   trigger2(channel :string,event:string,data:any)  {
        await this.pusher.trigger(channel,event,data);
      };



}
