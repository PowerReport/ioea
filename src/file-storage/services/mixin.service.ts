import { Injectable } from '@nestjs/common';
import { CopyItemDTO } from '../dto/copy-item.dto';
import { DeleteItemDTO } from '../dto/delete-item.dto';
import { MoveItemDTO } from '../dto/move-item.dto';
import { IMixinService } from './mixin.interface';

@Injectable()
export class MixinService implements IMixinService {
  copyItems(copyItemDTO: CopyItemDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }

  moveItems(moveItemDTO: MoveItemDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }

  deleteItems(deleteItemDTO: DeleteItemDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
