import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { User } from 'src/auth/user.entity';

@Injectable()
export class UserService {



   /* public saltOrRounds = 10;
    public password = '';
    public hash =  await bcrypt.hash(this.password, this.saltOrRounds);
    public salt =  bcrypt.genSalt();
    public isMatch =  await bcrypt.compare(this.password, this.hash);*/


    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }
    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
    
    async  readAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async hashPassword(pswd){
        let password = await bcrypt.hash(pswd, 10);
        return password;
     //const isMatch =  await bcrypt.compare(pwd,hash)
    }

    async update(contact: User): Promise<UpdateResult> {

        return await this.userRepository.update(contact.id,contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
}
