import { IFolderService } from './folder.interface';
import { FindConditions, IsNull, Like, TreeRepository } from 'typeorm';
import { FolderEntity } from '../entities/folder.entity';
import { Inject, Injectable } from '@nestjs/common';
import { FOLDER_REPOSITORY } from '../entities/repository.providers';
import { DataState } from '../../recycle-bin/entities/data-state';
import {
  IUserAccessor,
  USER_ACCESSOR,
} from 'src/shared/services/user.accessor';
import { FolderDTO } from '../dto/folder.dto';

@Injectable()
export class FolderService implements IFolderService {
  constructor(
    @Inject(FOLDER_REPOSITORY)
    private readonly folderRepository: TreeRepository<FolderEntity>,
    @Inject(USER_ACCESSOR)
    private readonly userAccessor: IUserAccessor,
  ) {}

  private async getUserViewedFolders(
    parentId?: number | 'root' | undefined,
    search?: string | undefined,
  ): Promise<FolderEntity[]> {
    const conditions: FindConditions<FolderEntity> = {
      state: DataState.Normal,
      owner: this.userAccessor.current.id,
    };

    if (parentId) {
      if (parentId === 'root') {
        conditions.parentId = IsNull();
      } else {
        conditions.parentId = parentId;
      }
    }

    if (search) {
      conditions.name = Like(`%${search}%`);
    }

    return await this.folderRepository.find(conditions);
  }

  async getAll(): Promise<FolderDTO[]> {
    return await this.getUserViewedFolders();
  }
}
