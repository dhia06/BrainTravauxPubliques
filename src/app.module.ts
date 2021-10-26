import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { UserP } from './Model/user.entity';
import { UsersController } from './Authentification/SignUp/users.controller';
import { UserService } from './Authentification/SignUp/user.service';
//import { FacebookStrategy } from "./facebook.strategy";
//import { GammeModule } from './gamme/gamme.module';
import { GameModule } from './game/game.module';

import { ServicessModule } from './servicess/servicess.module';
import { TaskModule } from './task/task.module';
import { TaskdModule } from './taskd/taskd.module';
import { ArticleModule } from './article/article.module';
import { LoggerModule } from './Authentification/logger/logger.module';
import { ProjetModule } from './projet/projet.module';
import { PrestationModule } from './Seconddb/prestation/prestation/prestation.module';
import { PiecesModule } from './Seconddb/pieces/pieces/pieces.module';
import { TypesModule } from './Seconddb/Types/types/types.module';
import { AccessiresModule } from './Seconddb/accessoires/accessires/accessires.module';
import { GammesModule } from './Seconddb/Gammes/gammes/gammes.module';
// import { AuthController } from './auth/auth.controller';

import { UserModule } from './user/user.module';
import { AccessoiresProjetModule } from './AccessoiresProjet/AccessoiresProjet.module';

// import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { DisponibiliteModule } from './disponibilite/disponibilite.module';
import { RdvModule } from './rdv/rdv.module';
import { PieceProjetModule } from './PieceProjet/PieceProjet.module';
import { AuthModule } from './Authentification/signin/auth.module';
import { AvoirModule } from './avoir/avoir.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PusherModule } from './pusher/pusher.module';
import { UserEntity } from './entities/user.entity';


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

 
  TypeOrmModule.forFeature([UserP]),
  TypeOrmModule.forFeature([UserEntity]),
  // TypeOrmModule.forFeature([Avoir]),
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
    
    PieceProjetModule,
    AccessoiresProjetModule,
    GameModule,
  LoggerModule,
  ProjetModule,

    ServicessModule,
    GammesModule,
    PrestationModule,
    PiecesModule,
    TypesModule,
    AccessiresModule,
    TaskModule,
     AvoirModule,
  
  
    TaskdModule,
  
  
    ArticleModule,
  
  
  
    ProjetModule,
  
  
    UserModule,
  
  
    LoginModule,
  
  
    DisponibiliteModule,
  
  
    RdvModule,
  
  
    NotificationsModule,
  
  
    PusherModule,


  
  


  
],
  controllers: [AppController,UsersController],
  providers: [AppService,UserService/*,FacebookStrategy*/],
})

export class AppModule {}
