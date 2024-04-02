import { Subject } from './subject.entity';
import { Chair } from '../../user/entities/chair.entity';
import { Gender } from '../../user/libs/enums/user.gender';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lecturer {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({ nullable: true })
  rating: number;
  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;
  @ManyToOne(() => Chair, (chair: Chair) => chair.lecturers)
  @JoinColumn({ name: 'chair_id' })
  chair: Chair;
  @ManyToMany(() => Subject, (subject: Subject) => subject)
  @JoinTable({ name: 'lecturers_subjects' })
  lecturersSubjects: Subject[];
}
