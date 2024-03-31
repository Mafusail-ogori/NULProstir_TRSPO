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
}
