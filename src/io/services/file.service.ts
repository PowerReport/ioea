import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileDTO } from '../dto/file.dto';
import { FileEntity } from '../entities/file.entity';
import { FILE_REPOSITORY } from '../entities/repository.providers';

export const FILE_SERVICE = 'FILE_SERVICE';

export interface IFileService {
  /**
   * 获取文件列表
   * @param search 检索关键字
   * @param sortBy 排序
   * @param page 页码
   * @param pageSize 页码大小
   */
  getAll(
    search?: string | undefined,
    sortBy?: string | undefined,
    page?: number | undefined,
    pageSize?: number | undefined,
  ): Promise<FileDTO[]>;
}

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
}
