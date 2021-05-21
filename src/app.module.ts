import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { User } from './Model/user.entity';
import { UsersController } from './signup/users.controller';
import { UserService } from './signup/user.service';
//import { FacebookStrategy } from "./facebook.strategy";
//import { GammeModule } from './gamme/gamme.module';
import { GameModule } from './game/game.module';

import { ServicessModule } from './servicess/servicess.module';
import { TaskModule } from './task/task.module';
import { TaskdModule } from './taskd/taskd.module';
import { ArticleModule } from './article/article.module';
import { LoggerModule } from './logger/logger.module';
import { ProjetModule } from './projet/projet.module';
//import { UserModule } from './user/user.module';



@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    database: 'projet',
    username: 'root',
    password: '',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }
  ),
  AuthModule,
 
  TypeOrmModule.forFeature([User]),
    MailerModule.forRoot({
      transport: {
        host: 'localhost',
        port: 3000,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.MAILDEV_INCOMING_USER,
          pass: process.env.MAILDEV_INCOMING_PASS,
        },
      },
      defaults: {
        from: 'lina.sahli@gmail.com', 
      },
      preview: true,
      template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      defaults: {
        from:'"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  
    GameModule,
  LoggerModule,
  ProjetModule,
    ServicessModule,
  
  
    TaskModule,
  
  
    TaskdModule,
  
  
    ArticleModule,
  
  
    LoggerModule,
  
  
    ProjetModule,
  
  
   // UserModule,
  


  
],
  controllers: [AppController,UsersController],
  providers: [AppService,UserService/*,FacebookStrategy*/],
})

export class AppModule {}
