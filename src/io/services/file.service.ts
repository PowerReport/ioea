import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileDTO } from '../dto/file.dto';
import { FileEntity } from '../entities/file.entity';
import { FILE_REPOSITORY } from '../entities/repository.providers';
import { IFileService } from './file.interface';

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

  async getById(
    id : number,
  ): Promise<FileDTO>{
    return await this.fileRepository.findOne(id);
  }
}

