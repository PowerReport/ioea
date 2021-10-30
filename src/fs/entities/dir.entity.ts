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
import { DataState } from '../../trash/entities/data-state';
import { FileEntity } from './file.entity';

/**
 * 目录实体
 */
@Entity('dir')
@Tree('materialized-path')
export class DirEntity {
  /**
   * 标识
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 名称
   */
  @Column()
  name: string;

  /**
   * 状态
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
   * 所属目录的 id
   */
  @Column({ nullable: true })
  baseDirId?: number | null | undefined;

  /**
   * 所属目录
   */
  @TreeParent()
  baseDir?: DirEntity | null | undefined;

  /**
   * 子目录
   */
  @TreeChildren()
  subDirs?: DirEntity[] | null | undefined;

  /**
   * 子文件
   */
  @OneToMany(() => FileEntity, (f) => f.baseDir)
  files?: FileEntity[] | null | undefined;

  /**
   * 深度
   */
  @TreeLevelColumn()
  depth: number;
}
