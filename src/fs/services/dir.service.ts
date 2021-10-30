import { IDirService } from './dir.interface';
import { FindConditions, IsNull, Like, TreeRepository } from 'typeorm';
import { DirEntity } from '../entities/dir.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DataState } from '../../trash/entities/data-state';
import { IUserAccessor, USER_ACCESSOR } from 'src/user/services/user.accessor';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemDto } from '../dto/item.dto';

@Injectable()
export class DirService implements IDirService {
  constructor(
    @InjectRepository(DirEntity)
    private readonly folderRepository: TreeRepository<DirEntity>,
    @Inject(USER_ACCESSOR)
    private readonly userAccessor: IUserAccessor,
  ) {}

  private async getUserViewedFolders(
    parentId?: number | 'root' | undefined,
    search?: string | undefined,
  ): Promise<DirEntity[]> {
    const conditions: FindConditions<DirEntity> = {
      state: DataState.Normal,
      owner: this.userAccessor.current.id,
    };

    if (parentId) {
      if (parentId === 'root') {
        conditions.baseDirId = IsNull();
      } else {
        conditions.baseDirId = parentId;
      }
    }

    if (search) {
      conditions.name = Like(`%${search}%`);
    }

    return await this.folderRepository.find(conditions);
  }

  post(): Promise<ItemDto> {
    throw new Error('not implemented.');
  }
}
