import { CopyItemDTO } from '../dto/copy-item.dto';
import { DeleteItemDTO } from '../dto/delete-item.dto';
import { MoveItemDTO } from '../dto/move-item.dto';

export const MIXIN_SERVICE = 'MixinService';

/**
 * 混合类型服务，提供文件夹和文件的拷贝、移动与删除操作
 */
export interface IMixinService {
  /**
   * 拷贝
   * @param copyItemDTO 拷贝的元素
   */
  copyItems(copyItemDTO: CopyItemDTO): Promise<void>;

  /**
   * 移动
   * @param moveItemDTO 移动的元素
   */
  moveItems(moveItemDTO: MoveItemDTO): Promise<void>;

  /**
   * 删除
   * @param deleteItemDTO 删除的元素
   */
  deleteItems(deleteItemDTO: DeleteItemDTO): Promise<void>;
}
