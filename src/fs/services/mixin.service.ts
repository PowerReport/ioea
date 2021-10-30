import { Injectable } from '@nestjs/common';
import { CopyItemDTO } from '../dto/copy-item.dto';
import { DeleteItemDTO } from '../dto/delete-item.dto';
import { MoveItemDTO } from '../dto/move-item.dto';
import { IMixinService } from './mixin.interface';
import { ItemDto } from '../dto/item.dto';

@Injectable()
export class MixinService implements IMixinService {
  copyItems(copyItemDTO: CopyItemDTO): Promise<ItemDto> {
    throw new Error('Method not implemented.');
  }

  moveItems(moveItemDTO: MoveItemDTO): Promise<ItemDto> {
    throw new Error('Method not implemented.');
  }

  deleteItems(deleteItemDTO: DeleteItemDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
