import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DataState } from './data-state';

@Entity('trash')
export class TrashEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: DataState;

  @Column()
  objectPath: string;

  @Column()
  cascadeObject: string;

  @Column()
  creator: string;

  @CreateDateColumn()
  createTime: Date;
}
