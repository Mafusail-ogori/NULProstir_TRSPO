import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Subgroup } from '../libs/types/subgroup.enum';
import { Switch } from '../libs/types/switch.enum';
import { WeekDay } from '../libs/types/day.enum';
import { Lecturer } from '../../article/entities/lecturer.entity';

@Entity()
export class TimeTableSubject {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({
    type: 'enum',
    enum: Subgroup,
  })
  subgroup: Subgroup;
  @Column({
    type: 'enum',
    enum: Switch,
  })
  switch: Switch;
  @Column({
    type: 'enum',
    enum: WeekDay,
  })
  weekDay: WeekDay;
  @ManyToMany(
    () => Lecturer,
    (lecturer: Lecturer) => lecturer.timeTableSubjects,
  )
  lecturers: Lecturer[];
}
