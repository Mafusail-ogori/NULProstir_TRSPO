import { Post } from '../../article/entities/post.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Event extends Post {
  @Column()
  startAt: Date;
  @Column()
  endsAt: Date;
  @Column()
  participantMaxCount: number;
  @Column({ nullable: true })
  websiteURL: string;
}
