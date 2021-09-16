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
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FOLDER_SERVICE, IFolderService } from '../services/folder.interface';
import {
  FORM_DATA_MIME_TYPE,
  FormDataInterceptor,
} from '../../shared/interceptors/form-data.interceptor';

/**
 * 文件夹服务
 */
@ApiTags('文件夹服务')
@Controller('api/1/folders')
export class FoldersController {
  constructor(
    @Inject(FOLDER_SERVICE)
    private readonly folderService: IFolderService,
  ) {}

  /**
   * 获取文件夹列表
   * @param search 检索关键字
   * @param sortBy 排序
   * @param page 页码
   * @param pageSize 页码大小
   */
  @Get()
  getAll(
    @Query('search') search?: string | undefined,
    @Query('sortBy') sortBy?: number | undefined,
    @Query('page', ParseIntPipe) page?: number | undefined,
    @Query('pageSize', ParseIntPipe) pageSize?: number | undefined,
  ) {
    throw new Error('not implemented.');
  }

  /**
   * 获取文件夹详情
   * @param id 文件夹的id
   */
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取文件夹下的文件列表
   * @param id 文件夹的id
   */
  @Get(':id/files')
  getFiles(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取文件夹下的文件夹列表
   * @param id 文件夹的id
   */
  @Get(':id/directories')
  getDirectories(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取文件夹下的文件夹和文件列表
   * @param id 文件夹的id
   */
  @Get(':id/children')
  getChildren(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取文件夹的父文件夹
   * @param id 文件夹的id
   */
  @Get(':id/parent')
  getParent(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 新增文件夹
   */
  @Post()
  post() {
    throw new Error('not implemented.');
  }

  /**
   * 更新文件夹
   * @param id 文件夹的id
   */
  @Put(':id')
  put(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 重命名文件夹
   * @param id 文件夹的id
   * @param name 文件夹的名称
   */
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @Put(':id/name')
  @UseInterceptors(FormDataInterceptor)
  rename(@Param('id', ParseIntPipe) id: number, @Body('name') name: string) {
    throw new Error('not implemented.');
  }

  /**
   * 移动文件夹
   * @param id 文件夹的id
   * @param parentId 父文件夹的id
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
   * 置顶文件夹
   * @param id 文件夹的id
   * @param top 置顶顺序
   */
  @ApiConsumes(FORM_DATA_MIME_TYPE)
  @Put(':id/top')
  @UseInterceptors(FormDataInterceptor)
  top(@Param('id', ParseIntPipe) id: number, @Body('top') top: number) {
    throw new Error('not implemented.');
  }

  /**
   * 删除文件夹
   * @param id 文件夹的id
   */
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }
}
