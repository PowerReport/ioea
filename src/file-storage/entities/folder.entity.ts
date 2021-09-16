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

/**
 * 文件夹实体
 */
@Entity('folder')
@Tree('materialized-path')
export class FolderEntity {
  /**
   * 实体主键
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 文件夹名称
   */
  @Column()
  name: string;

  /**
   * 文件夹状态
   */
  @Column()
  state: DataState;

  /**
   * 所有者
   */
  @Column()
  owner: string;

  /**
   * 创建者
   */
  @Column()
  creator: string;

  /**
   * 创建时间
   */
  @CreateDateColumn()
  createTime: Date;

  /**
   * 最后修改时间
   */
  @UpdateDateColumn()
  lastModified: Date;

  /**
   * 所属文件夹id
   */
  @Column({ nullable: true })
  parentId?: number | null | undefined;

  /**
   * 所属文件夹
   */
  @TreeParent()
  parent: FolderEntity;

  /**
   * 子文件夹
   */
  @TreeChildren()
  directories: FolderEntity[];

  /**
   * 子文件
   */
  @OneToMany(() => FileEntity, (f) => f.folder)
  files: FileEntity[];

  /**
   * 文件夹深度
   */
  @TreeLevelColumn()
  depth: number;
}
