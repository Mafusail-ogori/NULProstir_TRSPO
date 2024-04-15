import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Chair } from './chair.entity';
import { Article } from '../../article/entities/article.entity';

@Entity()
export class Institute {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @OneToMany(() => Chair, (chair: Chair) => chair.institute)
  chairs: Chair[];
  @OneToMany(() => Article, (article: Article) => article.institute)
  articles: Article[];
}
