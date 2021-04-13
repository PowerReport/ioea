import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DataState } from '../../io/entities/data-state';

@Entity('recycle_bin')
export class RecycleBinEntity {
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
