
import { UserP } from "src/Model/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { accessoires } from "./accessoires_vue.entity";
import { ArticleEntity } from "./article.entity";



@Entity()
export class Avoir extends BaseEntity {


    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    accessoiresId: number;


    @Column()
    public prix!: number;

    @ManyToOne(() => UserP, UserP => UserP.Avoir,
    {
      nullable: true,
      cascade: true,
      onDelete:'CASCADE',
               
          eager:true,
    }
  )
    public UserP: UserP;














    @ManyToOne(() => accessoires, accessoires => accessoires.Avoir,
    {
      nullable: true,
      cascade: true,
      onDelete:'CASCADE',
               
          eager:true,
    })
    public accessoires: accessoires;
 }