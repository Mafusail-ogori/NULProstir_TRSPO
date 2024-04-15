import { User } from '../../user/entities/user.entity';
import { Entity, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Post } from './post.entity';
import { Lecturer } from './lecturer.entity';
import { Subject } from './subject.entity';
import { Chair } from '../../user/entities/chair.entity';
import { Institute } from '../../user/entities/institute.entity';

@Entity()
export class Article extends Post {
  @Column({ nullable: true })
  lecturerId: string;
  @ManyToOne(() => User, (user: User) => user.articles, { eager: true })
  @JoinColumn({ name: 'creator' })
  user: User;
  @Column()
  creatorId: string;
  @ManyToOne(() => Lecturer, (lecturer: Lecturer) => lecturer.articles, {
    eager: true,
  })
  @JoinColumn({ name: 'lecturer' })
  lecturer: Lecturer;
  @ManyToOne(() => Subject, (subject: Subject) => subject.articles, {
    eager: true,
  })
  @JoinColumn({ name: 'subject' })
  subject: Subject;
  @Column({ nullable: true })
  subjectId: string;
  @ManyToOne(() => Chair, (chair: Chair) => chair.articles, { eager: true })
  @JoinColumn({ name: 'chair' })
  chair: Chair;
  @Column({ nullable: true })
  chairId: string;
  @ManyToOne(() => Institute, (institute: Institute) => institute, {
    eager: true,
  })
  @JoinColumn({ name: 'institute' })
  institute: Institute;
  @Column({ nullable: true })
  instituteId: string;
  @Column({ nullable: true })
  rating: number;
}
