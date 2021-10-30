import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CopyItemDTO } from '../dto/copy-item.dto';
import { DeleteItemDTO } from '../dto/delete-item.dto';
import { MoveItemDTO } from '../dto/move-item.dto';
import { IMixinService, MIXIN_SERVICE } from '../services/mixin.interface';
import { IdDTO } from '../dto/id.dto';
import {
  FORM_DATA_MIME_TYPE,
  FormDataInterceptor,
} from '../../common/interceptors/form-data.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemDto } from '../dto/item.dto';

/**
 * 混合类型服务
 */
@ApiTags('混合类型服务')
@Controller('api/1/mixin')
export class MixinController {
  constructor(
    @Inject(MIXIN_SERVICE)
    private readonly mixinService: IMixinService,
  ) {}

  /**
   * 浏览
   * @param id
   */
  @Get()
  browse(@Param('id') id: 'root' | number) {
    throw new Error('not implemented.');
  }

  /**
   * 新增
   */
  @ApiOperation({
    summary: '新增',
    description: '新增文件夹或文件',
  })
  @ApiBody({
    description: '需要新建的文件夹或文件',
    type: CreateItemDto,
    required: true,
  })
  @ApiOkResponse({
    description: '返回新建的文件夹或文件',
    type: ItemDto,
  })
  @Post()
  post(@Body() createItemDto: CreateItemDto): Promise<ItemDto> {
    throw new Error('not implemented.');
  }

  /**
   * 重命名文件
   * @param id 文件的id
   * @param name 文件的名称
   */
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @Put(':id/name')
  @UseInterceptors(FormDataInterceptor)
  rename(@Param('id') id: IdDTO, @Body('name') name: string): Promise<ItemDto> {
    throw new Error('not implemented.');
  }

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
  async copyItems(@Body() copyItemDTO: CopyItemDTO): Promise<ItemDto> {
    return await this.mixinService.copyItems(copyItemDTO);
  }

  /**
   * 移动
   * @param moveItemDTO 移动的元素
   */
  @Put('move')
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
  async moveItems(@Body() moveItemDTO: MoveItemDTO): Promise<ItemDto> {
    return await this.mixinService.moveItems(moveItemDTO);
  }

  /**
   * 置顶文件
   * @param id 文件的id
   * @param top 置顶顺序
   */
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @Put(':id/top')
  @UseInterceptors(FormDataInterceptor)
  top(
    @Param('id', ParseIntPipe) id: number,
    @Body('top') top: number,
  ): Promise<ItemDto> {
    throw new Error('not implemented.');
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

  /**
   * 上传文件
   */
  @Post('upload')
  @ApiBody({
    description: '上传的文件',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'file',
          format: 'binary',
        },
      },
    },
  })
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    throw new Error('not implemented.');
  }

  /**
   * 下载文件
   * @param id 文件的id
   */
  @Get(':id/download')
  download(@Param('id') id: IdDTO) {
    throw new Error('not implemented.');
  }
}
