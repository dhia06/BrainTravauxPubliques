import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { UserService } from './services/user/user.service';
import { UsersController } from './users/users.controller';

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
],
  controllers: [AppController,UsersController],
  providers: [AppService,UserService],
})

export class AppModule {}
