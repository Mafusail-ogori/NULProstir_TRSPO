import { Event } from '../../event/entities/event.entity';
import { Article } from '../../article/entities/article.entity';
import { Gender } from '../libs/enums/user.gender';
import { GraduationLevel } from '../libs/enums/user.graduation-level';
import { Role } from '../libs/enums/user.role';
import { Status } from '../libs/enums/user.status';
import { Chair } from './chair.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  fullName: string;
  @Column()
  userName: string;
  @Column()
  email: string;
  @Column()
  birthDate: Date;
  @Column()
  passwordHash: string;
  @Column({ nullable: true })
  profileDescription: string;
  @Column({ nullable: true })
  locationHash: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  modifiedAt: Date;
  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender: Gender;
  @Column({
    type: 'enum',
    enum: Status,
    nullable: true,
  })
  status: Status;
  @Column({
    type: 'enum',
    enum: Role,
    nullable: true,
  })
  role: Role;
  @Column({
    type: 'enum',
    enum: GraduationLevel,
    nullable: true,
  })
  graduationLevel: GraduationLevel;
  @OneToMany(() => Article, (article: Article) => article.user, {
    nullable: true,
  })
  articles: Article[];
  @ManyToOne(() => Chair, (chair: Chair) => chair.users, { nullable: true })
  chair: Chair;
  @OneToMany(() => Event, (event: Event) => event.creator)
  events: Event[];
}
