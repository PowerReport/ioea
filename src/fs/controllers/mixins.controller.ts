import { Body, Controller, Delete, Inject, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CopyItemDTO } from '../dto/copy-item.dto';
import { DeleteItemDTO } from '../dto/delete-item.dto';
import { MoveItemDTO } from '../dto/move-item.dto';
import { IMixinService, MIXIN_SERVICE } from '../services/mixin.interface';

/**
 * 混合类型服务
 */
@ApiTags('混合类型服务')
@Controller('api/1')
export class MixinsController {
  constructor(
    @Inject(MIXIN_SERVICE)
    private readonly mixinService: IMixinService,
  ) {}

  /**
   * 拷贝
   * @param copyItemDTO 拷贝的元素
   */
  @Post('copy')
  @ApiOperation({
    summary: '拷贝',
    description: '拷贝文件夹或文件',
  })
  @ApiBody({
    description: '拷贝的元素',
    type: CopyItemDTO,
  })
  @ApiOkResponse({
    description: '拷贝元素成功',
  })
  async copyItems(@Body() copyItemDTO: CopyItemDTO): Promise<void> {
    await this.mixinService.copyItems(copyItemDTO);
  }

  /**
   * 移动
   * @param moveItemDTO 移动的元素
   */
  @Post('move')
  @ApiOperation({
    summary: '移动',
    description: '移动文件夹或文件',
  })
  @ApiBody({
    description: '移动的元素',
    type: MoveItemDTO,
  })
  @ApiOkResponse({
    description: '移动元素成功',
  })
  async moveItems(@Body() moveItemDTO: MoveItemDTO): Promise<void> {
    await this.mixinService.moveItems(moveItemDTO);
  }

  /**
   * 删除
   * @param deleteItemDTO 删除的元素
   */
  @Delete()
  @ApiOperation({
    summary: '删除',
    description: '删除文件夹或文件',
  })
  @ApiBody({
    description: '删除的元素',
    type: DeleteItemDTO,
  })
  @ApiOkResponse({
    description: '删除元素成功',
  })
  async deleteItems(@Body() deleteItemDTO: DeleteItemDTO): Promise<void> {
    await this.mixinService.deleteItems(deleteItemDTO);
  }
}
