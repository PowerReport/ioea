import { Injectable } from '@nestjs/common';
import { CopyItemDto } from '../dto/copy-item.dto';
import { DeleteItemDto } from '../dto/delete-item.dto';
import { MoveItemDto } from '../dto/move-item.dto';
import { IMixinService } from './mixin.interface';
import { ItemDto } from '../dto/item.dto';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemTreeDto } from '../dto/item-tree.dto';
import { RenameItemDto } from '../dto/rename-item.dto';

@Injectable()
export class MixinService implements IMixinService {
  browse(id: string): Promise<ItemDto[]> {
    throw new Error('Method not implemented.');
  }

  create(createItemDto: CreateItemDto): Promise<ItemDto> {
    throw new Error('Method not implemented.');
  }

  rename(renameItemDto: RenameItemDto): Promise<ItemDto> {
    throw new Error('Method not implemented.');
  }

  copy(copyItemDto: CopyItemDto): Promise<ItemDto> {
    throw new Error('Method not implemented.');
  }

  move(moveItemDto: MoveItemDto): Promise<ItemDto> {
    throw new Error('Method not implemented.');
  }

  top(id: string): Promise<ItemDto> {
    throw new Error('Method not implemented.');
  }

  delete(deleteItemDto: DeleteItemDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
  upload(filename: string, content: Buffer): Promise<ItemTreeDto> {
    throw new Error('Method not implemented.');
  }
  
  download(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
