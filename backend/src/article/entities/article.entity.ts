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
import { ArticleTarget } from '../libs/enums/article-target.enum';

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
  startsAt: Date;
  @Column()
  endsAt: Date;
  @Column()
  participantMaxCount: number;
  @Column()
  websiteURL: string;
  @Column({
    type: 'enum',
    enum: ArticleTarget,
  })
  target: ArticleTarget;

  @ManyToOne(() => User, (user: User) => user.articles, { eager: true })
  @JoinColumn({ name: 'creator' })
  user: User;

  @Column({ nullable: true })
  creatorId: string;

  @ManyToMany(() => User, (user: User) => user.usersArticles)
  articlesUsers: User[];
}
