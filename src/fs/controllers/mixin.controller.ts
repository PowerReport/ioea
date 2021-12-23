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
import {
  FORM_DATA_MIME_TYPE,
  FormDataInterceptor,
} from '../../common/interceptors/form-data.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemDto } from '../dto/item.dto';
import { ParseIdPipe } from '../../common/pips/parse-id.pipe';
import { Id } from '../../common/models/id';

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
  browse(@Param('id', ParseIdPipe) id: Id) {
    throw new Error('not implemented.');
  }

  /**
   * 新增
   */
  @ApiOperation({
    summary: '新增',
    description: '新增目录或文件',
  })
  @ApiBody({
    description: '指定新增的目录或文件',
    type: CreateItemDto,
    required: true,
  })
  @ApiOkResponse({
    description: '返回新增的目录或文件',
    type: ItemDto,
  })
  @Post()
  post(@Body() createItemDto: CreateItemDto): Promise<ItemDto> {
    throw new Error('not implemented.');
  }

  /**
   * 重命名
   * @param id 标识
   * @param name 新的名称
   */
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @Put(':id/name')
  @UseInterceptors(FormDataInterceptor)
  rename(
    @Param('id', ParseIdPipe) id: Id,
    @Body('name') name: string,
  ): Promise<ItemDto> {
    throw new Error('not implemented.');
  }

  /**
   * 拷贝
   * @param copyItemDTO 指定拷贝的目录或文件
   */
  @Post('copy')
  @ApiOperation({
    summary: '拷贝',
    description: '拷贝目录或文件',
  })
  @ApiBody({
    description: '指定拷贝的目录或文件',
    type: CopyItemDTO,
  })
  @ApiOkResponse({
    description: '返回拷贝的目录或文件',
  })
  async copyItems(@Body() copyItemDTO: CopyItemDTO): Promise<ItemDto> {
    return await this.mixinService.copyItems(copyItemDTO);
  }

  /**
   * 移动
   * @param moveItemDTO 指定移动的目录或文件
   */
  @Put('move')
  @ApiOperation({
    summary: '移动',
    description: '移动目录或文件',
  })
  @ApiBody({
    description: '指定移动的目录或文件',
    type: MoveItemDTO,
  })
  @ApiOkResponse({
    description: '返回移动的目录或文件',
  })
  async moveItems(@Body() moveItemDTO: MoveItemDTO): Promise<ItemDto> {
    return await this.mixinService.moveItems(moveItemDTO);
  }

  /**
   * 置顶文件
   * @param id 标识
   * @param top 置顶顺序
   */
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @Put(':id/top')
  @UseInterceptors(FormDataInterceptor)
  top(
    @Param('id', ParseIdPipe) id: Id,
    @Body('top') top: number,
  ): Promise<ItemDto> {
    throw new Error('not implemented.');
  }

  /**
   * 删除
   * @param id 指定删除的目录或文件
   * @param deleteItemDTO 删除选项
   */
  @Delete(':id')
  @ApiOperation({
    summary: '删除',
    description: '删除目录或文件',
  })
  @ApiBody({
    description: '指定删除的目录或文件',
    type: DeleteItemDTO,
  })
  @ApiOkResponse({
    description: '删除操作已成功',
  })
  async deleteItems(
    @Param('id', ParseIdPipe) id: Id,
    @Body() deleteItemDTO: DeleteItemDTO,
  ): Promise<void> {
    await this.mixinService.deleteItems(deleteItemDTO);
  }

  /**
   * 上传
   */
  @Post('upload')
  @ApiBody({
    description: '指定上传的文件夹或文件',
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
   * 下载
   * @param id 标识
   */
  @Get(':id/download')
  download(@Param('id', ParseIdPipe) id: Id) {
    throw new Error('not implemented.');
  }
}
