import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileDTO } from '../dto/file.dto';
import { FileEntity } from '../entities/file.entity';
import { FILE_REPOSITORY } from '../entities/repository.providers';
import { IFileService } from './file.interface';
import { CreateFileDto } from '../dto/create-file.dto';
import { DataState } from '../entities/data-state';

@Injectable()
export class FileService implements IFileService {
  constructor(
    @Inject(FILE_REPOSITORY)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  async getAll(
    search?: string | undefined,
    sortBy?: string | undefined,
    page?: number | undefined,
    pageSize?: number | undefined,
  ): Promise<FileDTO[]> {
    return await this.fileRepository.find();
  }

  async getById(id: number): Promise<FileDTO> {
    return await this.fileRepository.findOne(id);
  }

  async post(createFileDTO: CreateFileDto): Promise<FileDTO> {
    // TODO: 验证模型，也可以放在 DTO 中用装饰器完成（模型绑定）

    let fileEntity: FileEntity = {
      ...createFileDTO,
      id: 0,
      createTime: new Date(),
      lastModified: new Date(),
      creator: '', // TODO: 获取当前用户的id
      owner: '',
      location: '',
      state: DataState.Normal,
      depth: 0,
    };

    if (createFileDTO.folderId) {
      // TODO: 计算目录的深度
      fileEntity.depth = 0;
    }

    fileEntity = await this.fileRepository.create(fileEntity);
    await this.fileRepository.save(fileEntity);

    // TODO: 转换为 DTO
    return fileEntity;
  }
}
