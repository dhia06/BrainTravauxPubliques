import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projet } from "src/Model/projet.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProjetService {
    constructor(
        @InjectRepository(Projet)
        private prjRepository: Repository<Projet>
    ) { }
    
    async create(prj: Projet): Promise<Projet> {
        return await this.prjRepository.save(prj);
    }
    
    async  readAll(): Promise<Projet[]> {
        return await this.prjRepository.find();
    }
}