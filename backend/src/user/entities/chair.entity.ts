import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Institute } from './institute.entity';
import { User } from './user.entity';
import { Subject } from '../../article/entities/subject.entity';
import { Lecturer } from '../../article/entities/lecturer.entity';
import { Article } from '../../article/entities/article.entity';

@Entity()
export class Chair {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @ManyToOne(() => Institute, (institute: Institute) => institute.chairs)
  @JoinColumn({ name: 'instituteId' })
  institute: Institute;
  @OneToMany(() => User, (user: User) => user.chair)
  users: User[];
  @OneToMany(() => Subject, (subject: Subject) => subject.chair)
  subjects: Subject[];
  @OneToMany(() => Lecturer, (lecturer: Lecturer) => lecturer.chair)
  lecturers: Lecturer[];
  @OneToMany(() => Article, (article: Article) => article.chair)
  articles: Article[];
}
