import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { length: 15 })
  title: string;

  @Column('varchar', { length: 100 })
  content: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  userId: User;
}
