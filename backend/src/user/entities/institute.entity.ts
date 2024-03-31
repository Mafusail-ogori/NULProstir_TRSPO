import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Chair } from './chair.entity';

@Entity()
export class Institute {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @OneToMany(() => Chair, (chair: Chair) => chair.institute)
  chairs: Chair[];
}
