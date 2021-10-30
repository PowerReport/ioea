import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileEntity } from '../entities/file.entity';
import { IFileService } from './file.interface';
import { CreateItemDto } from '../dto/create-item.dto';
import { DataState } from '../../trash/entities/data-state';
import { IUserAccessor, USER_ACCESSOR } from 'src/user/services/user.accessor';
import { InjectRepository } from '@nestjs/typeorm';
import { DirEntity } from '../entities/dir.entity';
import { Oops } from '../../common/friendly-except/oops';

@Injectable()
export class FileService implements IFileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
    @InjectRepository(DirEntity)
    private readonly dirRepository: Repository<DirEntity>,
    @Inject(USER_ACCESSOR)
    private readonly userAccessor: IUserAccessor,
  ) {}

  private async getCanViewedDir(id: 'root' | number): Promise<DirEntity> {
    if (id === 'root') {
      return null;
    }

    const dirEntity = await this.dirRepository.findOne(id);

    this.dirCanView(dirEntity);

    return dirEntity;
  }

  private dirCanView(dir: DirEntity): void {
    if (dir.state !== DataState.Normal) {
      throw Oops.bah('指定目录已被删除');
    }

    if (dir.owner !== this.userAccessor.current.id) {
      throw Oops.bah('您没有足够的权限访问指定目录');
    }
  }

  async post(createItemDto: CreateItemDto): Promise<FileEntity> {
    // TODO: 验证模型

    const baseDir =
      createItemDto.baseDirId &&
      (await this.getCanViewedDir(createItemDto.baseDirId));

    // TODO: 计算文件夹的深度
    const depth = 0;

    const fileEntity = this.fileRepository.create({
      location: '',
      createTime: new Date(),
      lastModified: new Date(),
      creator: this.userAccessor.current.id,
      owner: this.userAccessor.current.id,
      state: DataState.Normal,
      baseDir: baseDir,
      depth: depth,
    });
    await this.fileRepository.save(fileEntity);

    // TODO: 转换为 DTO
    return fileEntity;
  }
}
