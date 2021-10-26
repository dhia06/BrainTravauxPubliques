import { AccessoiresProjet } from 'src/Model/AccessoiresProjet.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { ArticleEntity } from './article.entity';
import { Avoir } from './avoir.entity';
import { Prestation } from './pretation_vue.entity';


@Entity()
//REF
//cette entité n'est pas utilisé dans notre projet elle est implementé avec la template
export class accessoires {
  @PrimaryGeneratedColumn()
  id: number;
 
  // @Column()
  // nom: string;



  @Column()
  prestationid: string;

  @Column({
    default: 100
  })
  Prix: number;

  @Column({
    default: 0
  })
  checked: true;
  //relation manytoone chaque travail appartiet a un seul service
  @ManyToOne(type => Prestation,
    (Prestation) => Prestation.accessoires,
    {

      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      //les traveaux peuvent etre vides
      nullable: true

    }
  )
  @JoinColumn(
    { name: "prestationid" }
  )
  Prestation: Prestation[];



  @OneToMany(type => AccessoiresProjet,
    (AccessoiresProjet) => AccessoiresProjet.accessoires,
    {
      onDelete: "CASCADE",
      onUpdate: 'CASCADE',
      nullable: true,
      cascade: true,
    })
  AccessoiresProjet: AccessoiresProjet[];

  @OneToMany(() => Avoir, Avoir => Avoir.accessoires)
  Avoir: Avoir[];




  @OneToOne(() => ArticleEntity ,    {
      onDelete: "CASCADE",
      onUpdate: 'CASCADE',
      nullable: true,
      cascade: true,
      eager:true
    })
  
  @JoinColumn()
  ArticleEntity: ArticleEntity[];

}
