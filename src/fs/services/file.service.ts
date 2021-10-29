import { Inject, Injectable } from '@nestjs/common';
import { FindConditions, IsNull, Like, Repository } from 'typeorm';
import { FileDTO } from '../dto/file.dto';
import { FileEntity } from '../entities/file.entity';
import { IFileService } from './file.interface';
import { CreateFileDTO } from '../dto/create-file.dto';
import { DataState } from '../../trash/entities/data-state';
import { IUserAccessor, USER_ACCESSOR } from 'src/user/services/user.accessor';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FileService implements IFileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
    @Inject(USER_ACCESSOR)
    private readonly userAccessor: IUserAccessor,
  ) {}

  private async getUserViewedFiles(
    folderId?: number | 'root' | undefined,
    search?: string | undefined,
  ): Promise<FileEntity[]> {
    const conditions: FindConditions<FileEntity> = {
      state: DataState.Normal,
      owner: this.userAccessor.current.id,
    };

    if (folderId) {
      if (folderId === 'root') {
        conditions.folderId = IsNull();
      } else {
        conditions.folderId = folderId;
      }
    }

    if (search) {
      conditions.name = Like(`%${search}%`);
    }

    return await this.fileRepository.find(conditions);
  }

  async getAll(
    search?: string | undefined,
    sortBy?: string | undefined,
    page?: number | undefined,
    pageSize?: number | undefined,
  ): Promise<FileDTO[]> {
    return await this.getUserViewedFiles(undefined, search);
  }

  async getById(id: number): Promise<FileDTO> {
    return await this.fileRepository.findOne(id);
  }

  async post(createFileDTO: CreateFileDTO): Promise<FileDTO> {
    // TODO: 验证模型，也可以放在 DTO 中用装饰器完成（模型绑定）

    let fileEntity: FileEntity = {
      ...createFileDTO,
      id: 0,
      createTime: new Date(),
      lastModified: new Date(),
      creator: this.userAccessor.current.id,
      owner: this.userAccessor.current.id,
      location: '',
      state: DataState.Normal,
      depth: 0,
    };

    if (createFileDTO.folderId) {
      // TODO: 计算文件夹的深度
      fileEntity.depth = 0;
    }

    fileEntity = this.fileRepository.create(fileEntity);
    await this.fileRepository.save(fileEntity);

    // TODO: 转换为 DTO
    return fileEntity;
  }
}
