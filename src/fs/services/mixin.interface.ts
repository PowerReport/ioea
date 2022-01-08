import { CopyItemDto } from '../dto/copy-item.dto';
import { DeleteItemDto } from '../dto/delete-item.dto';
import { MoveItemDto } from '../dto/move-item.dto';
import { ItemDto } from '../dto/item.dto';
import { CreateItemDto } from '../dto/create-item.dto';
import { RenameItemDto } from '../dto/rename-item.dto';
import { ItemTreeDto } from '../dto/item-tree.dto';

export const MIXIN_SERVICE = 'MixinService';

/**
 * 目录文件服务
 */
export interface IMixinService {
  /**
   * 浏览
   * @param id
   */
  browse(id: string): Promise<ItemDto[]>;

  /**
   * 新建
   * @param createItemDto
   * @returns
   */
  create(createItemDto: CreateItemDto): Promise<ItemDto>;

  /**
   * 重命名
   * @param renameItemDto
   */
  rename(renameItemDto: RenameItemDto): Promise<ItemDto>;

  /**
   * 拷贝
   * @param copyItemDto
   */
  copy(copyItemDto: CopyItemDto): Promise<ItemDto>;

  /**
   * 移动
   * @param moveItemDto
   */
  move(moveItemDto: MoveItemDto): Promise<ItemDto>;

  /**
   * 置顶
   * @param id
   */
  top(id: string): Promise<ItemDto>;

  /**
   * 删除
   * @param deleteItemDto
   */
  delete(deleteItemDto: DeleteItemDto): Promise<void>;

  /**
   * 上传
   * @param filename
   * @param content
   */
  upload(filename: string, content: Buffer): Promise<ItemTreeDto>;

  /**
   * 下载
   * @param id
   */
  download(id: string): Promise<string>;
}
