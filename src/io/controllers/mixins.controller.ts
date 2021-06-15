import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CopyItemDTO } from '../dto/copy-item.dto';
import { DeleteItemDTO } from '../dto/delete-item.dto';
import { MoveItemDTO } from '../dto/move-item.dto';

/**
 * 混合类型服务，提供目录和文件的拷贝、移动与删除操作
 */
@ApiTags('混合类型服务，提供目录和文件的拷贝、移动与删除操作')
@Controller('api/1')
export class MixinsController {
  /**
   * 拷贝
   * @param copyItemDTO 拷贝的元素
   */
  @Post('copy')
  copyItems(@Body() copyItemDTO: CopyItemDTO): Promise<void> {
    throw new Error('not implemented.');
  }

  /**
   * 移动
   * @param moveItemDTO 移动的元素
   */
  @Post('move')
  moveItems(@Body() moveItemDTO: MoveItemDTO): Promise<void> {
    throw new Error('not implemented.');
  }

  /**
   * 删除
   * @param deleteItemDTO 删除的元素
   */
  @Delete('delete')
  deleteItems(@Body() deleteItemDTO: DeleteItemDTO): Promise<void> {
    throw new Error('not implemented.');
  }
}
