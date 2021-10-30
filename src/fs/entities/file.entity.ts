import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DataState } from '../../trash/entities/data-state';
import { DirEntity } from './dir.entity';

/**
 * 文件实体
 */
@Entity('file')
export class FileEntity {
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
   * 存储路径
   */
  @Column()
  location: string;

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
  @ManyToOne(() => DirEntity, (f) => f.files)
  baseDir?: DirEntity | null | undefined;

  /**
   * 深度
   */
  @Column()
  depth: number;
}
