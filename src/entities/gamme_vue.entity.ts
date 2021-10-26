import { GammeEnum } from 'src/Model/gamme';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, Unique } from 'typeorm';
import { Types } from './Types.entity';
@Entity()
@Unique(['name'])
@Entity()
//cette entité n'est pas utilisé dans notre projet elle est implementé avec la template
export class Gammes extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  // @Column()
  // nom: string;

  @Column({
    type: 'enum',
    enum: GammeEnum,
  })
 name: string;


  @Column()
  prix_metrique: number;

  @OneToMany(type => Types, 
    (Types) => Types.Gammes,
    {
      //qd on supprime un service tous les traveux seront supprimés 
      onDelete:'CASCADE',
  //les traveaux peuvent etre vides
      nullable:true,
      eager:true,
    })
    Types: Types[];

}