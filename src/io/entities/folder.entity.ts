import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeLevelColumn,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';
import { DataState } from '../../recycle-bin/entities/data-state';
import { FileEntity } from './file.entity';

@Entity('folder')
@Tree('materialized-path')
export class FolderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  state: DataState;

  @Column()
  owner: string;

  @Column()
  creator: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  lastModified: Date;

  @Column({ nullable: true })
  parentId?: number | null | undefined;

  @TreeParent()
  parent: FolderEntity;

  @TreeChildren()
  directories: FolderEntity[];

  @OneToMany(() => FileEntity, (f) => f.folder)
  files: FileEntity[];

  @TreeLevelColumn()
  depth: number;
}
