import {
  Bind,
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateFileDTO } from './dto/create-file.dto';
import { FileDTO } from './dto/file.dto';
import { FILE_SERVICE, IFileService } from './services/file.interface';
import {
  FORM_DATA_MIME_TYPE,
  FormDataInterceptor,
} from '../shared/interceptors/form-data.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';

/**
 * 文件服务
 */
@ApiTags('文件服务')
@Controller('api/v1/file')
export class FileController {
  constructor(
    @Inject(FILE_SERVICE)
    private readonly fileService: IFileService,
  ) {}

  /**
   * 获取文件列表
   * @param search 检索关键字
   * @param sortBy 排序
   * @param page 页码
   * @param pageSize 页码大小
   */
  @ApiOperation({
    summary: '获取文件列表',
    description: '获取文件列表',
  })
  @ApiQuery({
    name: 'search',
    description: '检索关键字',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'sortBy',
    description: '排序',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    description: '页码',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'pageSize',
    description: '页码大小',
    type: Number,
    required: false,
  })
  @ApiOkResponse({
    description: '返回文件列表',
    type: FileDTO,
    isArray: true,
  })
  @ApiBadRequestResponse({
    description: '模型验证失败',
  })
  @ApiUnauthorizedResponse({
    description: '鉴权失败',
  })
  @Get()
  async getAll(
    @Query('search') search?: string | undefined,
    @Query('sortBy') sortBy?: string | undefined,
    @Query('page') page?: number | undefined,
    @Query('pageSize') pageSize?: number | undefined,
  ): Promise<FileDTO[]> {
    return await this.fileService.getAll(search, sortBy, page, pageSize);
  }

  /**
   * 获取文件详情
   * @param id 文件的id
   */
  @ApiParam({
    name: 'id',
    description: '文件的id',
    type: Number,
  })
  @ApiOkResponse({
    description: '返回指定id文件',
    type: FileDTO,
  })
  @ApiBadRequestResponse({
    description: '模型验证失败',
  })
  @ApiUnauthorizedResponse({
    description: '鉴权失败',
  })
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<FileDTO> {
    return await this.fileService.getById(id);
  }

  /**
   * 获取文件的信息
   * @param id 文件的id
   */
  @Get(':id/manifest')
  getManifest(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 预览文件
   * @param id 文件的id
   * @param version 文件的版本
   */
  @Get(':id/preview')
  preview(
    @Param('id', ParseIntPipe) id: number,
    @Query('version') version?: number | undefined,
  ) {
    throw new Error('not implemented.');
  }

  /**
   * 下载文件
   * @param id 文件的id
   */
  @Get(':id/download')
  download(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 导出
   * @param id 文件的id
   * @param type 文件类型
   */
  @Get(':id/:type')
  export(@Param('id', ParseIntPipe) id: number, @Param('type') type: string) {
    throw new Error('not implemented.');
  }

  /**
   * 新增文件
   */
  @ApiOperation({
    summary: '新增文件',
    description: '新增文件',
  })
  @ApiBody({
    description: '需要新建的文件',
    type: CreateFileDTO,
    required: true,
  })
  @ApiOkResponse({
    description: '返回指定id文件',
    type: FileDTO,
  })
  @ApiBadRequestResponse({
    description: '模型验证失败',
  })
  @ApiUnauthorizedResponse({
    description: '鉴权失败',
  })
  @Post()
  post(@Body() createFileDTO: CreateFileDTO) {
    return this.fileService.post(createFileDTO);
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
   * 复制文件
   * @param id 文件的id
   */
  @Post(':id/clone')
  clone(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 更新文件
   * @param id 文件的id
   */
  @Put(':id')
  put(@Param('id', ParseIntPipe) id: number) {
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
  rename(@Param('id', ParseIntPipe) id: number, @Body('name') name: string) {
    throw new Error('not implemented.');
  }

  /**
   * 移动文件
   * @param id 文件的id
   * @param parentId 父目录的id
   */
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @Put(':id/move')
  @UseInterceptors(FormDataInterceptor)
  move(
    @Param('id', ParseIntPipe) id: number,
    @Body('parentId') parentId?: number | undefined,
  ) {
    throw new Error('not implemented.');
  }

  /**
   * 置顶文件
   * @param id 文件的id
   * @param top 置顶顺序
   */
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @Put(':id/top')
  @UseInterceptors(FormDataInterceptor)
  top(@Param('id', ParseIntPipe) id: number, @Body('top') top: number) {
    throw new Error('not implemented.');
  }

  /**
   * 删除文件
   * @param id 文件的id
   */
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }
}
