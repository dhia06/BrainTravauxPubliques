import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { TaskdEntity } from './taskd.entity';

@Entity()
export class ArticleEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  image: string;

  @Column()
  unite: string;
  
  @Column()
  prix: string;

  @Column()
  travdetid: number;


  @ManyToOne(type => TaskdEntity, 
    (TaskdEntity) => TaskdEntity.ArticleEntity,
    {
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
     // eager:true,
      
        //les traveaux peuvent etre vides
      nullable:true,
    }    )  
    @JoinColumn(
    {name:"travdetid"}   )
    
    TaskdEntity:TaskdEntity[];

 
}