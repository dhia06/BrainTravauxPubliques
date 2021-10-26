import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { accessoires } from "./accessoires_vue.entity";
import { Avoir } from "./avoir.entity";
import { TaskdEntity } from "./taskd.entity";


@Entity()
export class ArticleEntity  {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  
  @Column({default:"image.jpg"})
  image!: string;

  @Column({default:"unité d ouvrage"})
  unite!: string;
  
  // @Column()
  // prix!: string;

  @Column()
  travdetid!: number;
  @ManyToOne(type => TaskdEntity, 
    (TaskdEntity) => TaskdEntity.ArticleEntity,
    {
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
   //  eager:true,
      
        //les traveaux peuvent etre vides
     nullable:true   
    }    )  
    @JoinColumn(
    {name:"travdetid"}   )
    
    TaskdEntity:TaskdEntity[];
     
 
  
  // @OneToMany(() => Avoir, Avoir => Avoir.articleentity)
  // public Avoir: Avoir[];


  @OneToOne(() => accessoires, accessoires => accessoires.ArticleEntity) // specify inverse side as a second parameter
  accessoires: accessoires[];



    }



 
