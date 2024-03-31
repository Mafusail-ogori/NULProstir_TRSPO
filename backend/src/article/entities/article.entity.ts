import { User } from '../../user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

enum ArticleTarget {
  Entertainment = 'entertainment',
  Event = 'event',
  SubjectInfo = 'subject-info',
  LecturerInfo = 'lecturer-info',
}

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  createdAt: string;
  @UpdateDateColumn()
  modifiedAt: string;
  @Column()
  startsAt: string;
  @Column()
  endsAt: string;
  @Column()
  participantMaxCount: string;
  @Column()
  website: string;
  @Column({
    type: 'enum',
    enum: ArticleTarget,
  })
  target: ArticleTarget;

  @ManyToOne(() => User, (user: User) => user.articles)
  @JoinColumn({ name: 'creator_id' })
  user: User;
  @ManyToMany(() => User, (user: User) => user.usersArticles)
  articlesUsers: User[];
}
