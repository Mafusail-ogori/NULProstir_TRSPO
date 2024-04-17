import { User } from '../../user/entities/user.entity';
import { Post } from '../../article/entities/post.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Event extends Post {
  @Column()
  startsAt: Date;
  @Column()
  endsAt: Date;
  @Column({ nullable: true })
  participantMaxCount: number;
  @Column({ nullable: true })
  websiteURL: string;
  @ManyToOne(() => User, (user: User) => user.events, { eager: true })
  @JoinColumn({ name: 'user' })
  creator: User;
  @Column()
  creatorId: string;
}
