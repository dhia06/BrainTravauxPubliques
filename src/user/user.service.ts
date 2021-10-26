import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { UserEntity } from 'src/entities/user.entity';
import { UserPr } from 'src/Model/UserPr.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

import { UserDto } from './dto/User.dto';

@Injectable()


export class UserService {
    constructor(
        @InjectRepository(UserPr)
        private readonly userRepoo: Repository<UserPr>,
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>) { }

    async findOne(options?: object): Promise<UserDto> {
        const user = await this.userRepo.findOne(options);
        return (user);
    }




    async findByPayload({ username }: any): Promise<UserDto> {
        return await this.findOne({
            where: { username }
        });
    }


    async create(userDto: CreateUserDto): Promise<any> {
        const { username, password, email, number, role } = userDto;
        const userInDb = await this.userRepo.findOne({
            where: { username: username }
        });
        if (userInDb) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }
        else {
            const user: any = await this.userRepo.create(userDto);
            return await this.userRepo.save(userDto);
        }
    }




    async createe(usa: UserPr): Promise<any> {
        await this.userRepoo.create(usa);
        return await this.userRepoo.save(usa);

    }






















}
