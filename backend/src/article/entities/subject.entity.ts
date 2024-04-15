import { Chair } from '../../user/entities/chair.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Lecturer } from './lecturer.entity';
import { Article } from './article.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  ects: number;
  @ManyToOne(() => Chair, (chair: Chair) => chair.subjects)
  @JoinColumn({ name: 'chair_id' })
  chair: Chair;
  @ManyToMany(
    () => Lecturer,
    (lecturer: Lecturer) => lecturer.lecturersSubjects,
  )
  subjectsLecturers: Lecturer[];
  @OneToMany(() => Article, (article: Article) => article.subject)
  articles: Article[];
}
