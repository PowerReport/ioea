import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CopyItemDto } from '../dto/copy-item.dto';
import { DeleteItemDto } from '../dto/delete-item.dto';
import { MoveItemDto } from '../dto/move-item.dto';
import { IMixinService, MIXIN_SERVICE } from '../services/mixin.interface';
import {
  FORM_DATA_MIME_TYPE,
} from '../../common/interceptors/form-data.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemDto } from '../dto/item.dto';
import { RenameItemDto } from '../dto/rename-item.dto';
import { ItemTreeDto } from '../dto/item-tree.dto';
import { Response } from 'express';

@ApiTags('目录文件服务')
@Controller('api/1/mixin')
export class MixinController {
  constructor(
    @Inject(MIXIN_SERVICE)
    private readonly mixinService: IMixinService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '浏览',
    description: '浏览指定目录下的目录或文件',
  })
  @ApiParam({
    name: 'id',
    description: '目录的 `id`，`root` 表示根目录',
  })
  @ApiOkResponse({
    description: '返回指定目录下的目录或文件',
    type: ItemDto,
    isArray: true,
  })
  async browse(@Param('id') id: string): Promise<ItemDto[]> {
    return await this.mixinService.browse(id);
  }

  @Post()
  @ApiOperation({
    summary: '新增',
    description: '新增目录或文件',
  })
  @ApiBody({
    description: '指定新增的目录或文件',
    type: CreateItemDto,
  })
  @ApiOkResponse({
    description: '返回新增的目录或文件',
    type: ItemDto,
  })
  async post(@Body() createItemDto: CreateItemDto): Promise<ItemDto> {
    return await this.mixinService.create(createItemDto);
  }

  @Put('name')
  @ApiOperation({
    summary: '重命名',
    description: '重命名目录或文件',
  })
  @ApiBody({
    description: '指定重命名的目录或文件',
    type: RenameItemDto,
  })
  @ApiOkResponse({
    description: '返回重命名的目录或文件',
    type: ItemDto,
  })
  async rename(@Body() renameItemDto : RenameItemDto): Promise<ItemDto> {
    return await this.mixinService.rename(renameItemDto);
  }

  @Post('copy')
  @ApiOperation({
    summary: '拷贝',
    description: '拷贝目录或文件',
  })
  @ApiBody({
    description: '指定拷贝的目录或文件',
    type: CopyItemDto,
  })
  @ApiOkResponse({
    description: '返回拷贝的目录或文件',
    type: ItemDto,
  })
  async copy(@Body() copyItemDTO: CopyItemDto): Promise<ItemDto> {
    return await this.mixinService.copy(copyItemDTO);
  }

  @Put('move')
  @ApiOperation({
    summary: '移动',
    description: '移动目录或文件',
  })
  @ApiBody({
    description: '指定移动的目录或文件',
    type: MoveItemDto,
  })
  @ApiOkResponse({
    description: '返回移动的目录或文件',
    type: ItemDto,
  })
  async move(@Body() moveItemDTO: MoveItemDto): Promise<ItemDto> {
    return await this.mixinService.move(moveItemDTO);
  }

  @Put(':id/top')
  @ApiOperation({
    summary: '置顶',
    description: '置顶目录或文件',
  })
  @ApiParam({
    name: 'id',
    description: '目录或文件的 `id`',
    type: String,
  })
  @ApiOkResponse({
    description: '返回置顶的目录或文件',
    type: ItemDto,
  })
  async top(@Param('id') id: string): Promise<ItemDto> {
    return await  this.mixinService.top(id);
  }

  @Delete()
  @ApiOperation({
    summary: '删除',
    description: '删除目录或文件',
  })
  @ApiBody({
    description: '指定删除的目录或文件',
    type: DeleteItemDto,
  })
  @ApiOkResponse({
    description: '删除操作已成功',
  })
  async delete(@Body() deleteItemDto: DeleteItemDto): Promise<void> {
    await this.mixinService.delete(deleteItemDto);
  }

  @Post('upload')
  @ApiOperation({
    summary: '上传',
    description: '上传目录或文件',
  })
  @ApiConsumes(FORM_DATA_MIME_TYPE)
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
  @ApiOkResponse({
    description: '返回上传成功的目录或文件树',
    type: ItemTreeDto,
  })
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File): Promise<ItemTreeDto> {
    return await this.mixinService.upload(file.originalname, file.buffer);
  }

  @Get(':id/download')
  @ApiOperation({
    summary: '下载',
    description: '下载目录或文件',
  })
  @ApiParam({
    name: 'id',
    description: '目录或文件的 `id`',
    type: String,
  })
  @ApiOkResponse({
    description: '返回二进制数据',
    type: Buffer,
  })
  async download(@Res() res: Response, @Param('id') id: string): Promise<void> {
    const file = await this.mixinService.download(id);
    res.sendFile(file);
  }
}
