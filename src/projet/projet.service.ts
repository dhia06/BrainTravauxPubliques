import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projet } from "src/Model/projet.entity";
import { Repository, UpdateResult } from "typeorm";
import { UserEntity } from "src/entities/user.entity";
// export const GetUser = createParamDecorator((data, context: ExecutionContext)  => {
//  const ctx = GqlExecutionContext.create(context).getContext();
//  console.log("ctssss",ctx)
// return ctx.req.user
// });

// export const GetUser = createParamDecorator((ctx: ExecutionContext): UserPr => {
    
//     const req = ctx.switchToHttp().getRequest();
//     console.log("ghnhkchjdh",req.user)
//     return req.user;
// });

// export const GetUser = createParamDecorator(
//     (data: unknown, context: ExecutionContext) => {
//         const ctx = GqlExecutionContext.create(context);
//         return ctx.getContext().req.user;
//     },
// );

// export const GetUser = createParamDecorator(
//     (data: unknown, context: ExecutionContext) => {
//         const ctx = GqlExecutionContext.create(context);
//         const user = ctx.getContext().req.user;
      
//       return user;
//     },
//   );


@Injectable()
export class ProjetService {
    constructor(
        @InjectRepository(Projet)
        private prjRepository: Repository<Projet>
    ) { }



    // public async findById(id): Promise<UserPr> {
    //     return Promise.all([
    //         this.userModel.findById(id).exec().then(user => UserService.mapUserToDto(user)),
    //   //      this.settingsService.findById(id),
    //     ]).then(([user, settings]) => {
    //         user.settings = settings;
    //         return user;
    //     });
    //     // return await this.userModel.findById(id).exec()
    //     //   .then(user => UserService.mapUserToDto(user));
    // }





    async createe(prj: Projet): Promise<Projet> {
        return await this.prjRepository.save(prj);
    }


    async update(task: Projet): Promise<UpdateResult> {

        return await this.prjRepository.update(task.id,task);
    }



    async create(prj: Projet,user: UserEntity): Promise<any>  {
        console.log("yhjjj")
        let monproj = this.prjRepository.create(prj);
        monproj.UserEntity= user;
        console.log("yhjjj")
        return await this.prjRepository.save(monproj);
    }







    

    async readAll(user: UserEntity): Promise<any> {
        console.log("yhjjj")
        return await this.prjRepository.find({ where: {UserEntity:user}})
        
    }

    

    async AllProject(): Promise<Projet[]> {
        return await this.prjRepository.find()
        
    }

    async findProjetById(id: number): Promise<Projet> {

        const prj = await this.prjRepository.findOne(id);
        return prj;

    }

}