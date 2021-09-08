import { Validate } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DataState } from '../../recycle-bin/entities/data-state';
import { ValidateExt, ValidateName } from '../validators/file-validator';
import { FolderEntity } from './folder.entity';

/**
 * 文件实体
 */
@Entity('file')
export class FileEntity {
  /**
   * 实体主键
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 文件名称
   */
  @Column()
  @Validate(ValidateName)
  name: string;

  /**
   * 文件扩展名
   */
  @Column()
  @Validate(ValidateExt)
  ext: string;

  /**
   * 文件存储路径
   */
  @Column()
  location: string;

  /**
   * 文件状态
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
  folderId?: number | null | undefined;

  /**
   * 所属文件夹
   */
  @ManyToOne(() => FolderEntity, (f) => f.files)
  folder?: FolderEntity | null | undefined;

  /**
   * 文件深度
   */
  @Column()
  depth: number;
}
