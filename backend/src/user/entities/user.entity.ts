import { Article } from '../../article/entities/article.entity';
import { Chair } from './chair.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

enum Gender {
  Male = 'male',
  Female = 'female',
  NonBinary = 'non-binary',
  Transgender = 'transgender',
  GenderQueer = 'genderqueer',
  AGender = 'agender',
  BiGender = 'bigender',
  GenderFluid = 'genderfluid',
  Intersex = 'intersex',
  TwoSpirit = 'two-spirit',
  Other = 'other',
}

enum Role {
  Creator = 'creator',
  User = 'user',
  Moderator = 'moderator',
  Admin = 'admin',
}

enum Status {
  Online = 'online',
  Offline = 'offline',
  Busy = 'busy',
  DnD = 'dnd',
  Invisible = 'invisible',
}

enum GraduationLevel {
  Bachelor = 'bachelor',
  Master = 'master',
  PhD = 'phd',
  Postgraduate = 'postgraduate',
}

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
  @Column()
  profileDescription: string;
  @Column()
  locationHash: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  modifiedAt: Date;
  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;
  @Column({
    type: 'enum',
    enum: Status,
  })
  status: Status;
  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;
  @Column({
    type: 'enum',
    enum: GraduationLevel,
  })
  graduationLevel: GraduationLevel;
  @OneToMany(() => Article, (article: Article) => article.user)
  articles: Article[];
  @ManyToOne(() => Chair, (chair: Chair) => chair.users)
  chair: Chair;
  @ManyToMany(() => Article, (article: Article) => article.articlesUsers)
  @JoinTable()
  usersArticles: Article[];
}
