import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPrRepository } from 'src/Authentification/logger/UserPr.repository';
import { UserEntity } from 'src/entities/user.entity';
import { LoginService } from 'src/login/login.service';
import { UserService } from './user.service';

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity])],


    providers: [UserService,UserPrRepository],
    exports:[UserService]
})
export class UserModule {}

