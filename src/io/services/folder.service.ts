import { IFolderService } from './folder.interface';
import { TreeRepository } from 'typeorm';
import { FolderEntity } from '../entities/folder.entity';
import { Inject, Injectable } from '@nestjs/common';
import { FOLDER_REPOSITORY } from '../entities/repository.providers';

@Injectable()
export class FolderService implements IFolderService {
  constructor(
    @Inject(FOLDER_REPOSITORY)
    private readonly folderRepository: TreeRepository<FolderEntity>,
  ) {}

  getAll() {
    throw new Error('not implemented.');
  }
}
