import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * 目录服务
 */
@ApiTags('目录服务')
@Controller('api/v1/folder')
export class FolderController {
  /**
   * 获取目录列表
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
   * 获取目录详情
   * @param id 目录的id
   */
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取目录下的文件列表
   * @param id 目录的id
   */
  @Get(':id/files')
  getFiles(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取目录下的目录列表
   * @param id 目录的id
   */
  @Get(':id/directories')
  getDirectories(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取目录下的目录和文件列表
   * @param id 目录的id
   */
  @Get(':id/children')
  getChildren(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 获取目录的父目录
   * @param id 目录的id
   */
  @Get(':id/parent')
  getParent(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 新增目录
   */
  @Post()
  post() {
    throw new Error('not implemented.');
  }

  /**
   * 更新目录
   * @param id 目录的id
   */
  @Put(':id')
  put(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 重命名目录
   * @param id 目录的id
   * @param name 目录的名称
   */
  @Put(':id/name')
  rename(@Param('id', ParseIntPipe) id: number, @Body('name') name: string) {
    throw new Error('not implemented.');
  }

  /**
   * 移动目录
   * @param id 目录的id
   * @param parentId 父目录的id
   */
  @Put(':id/move')
  move(
    @Param('id', ParseIntPipe) id: number,
    @Query('parentId') parentId?: number | undefined,
  ) {
    throw new Error('not implemented.');
  }

  /**
   * 置顶目录
   * @param id
   */
  @Put(':id/top')
  top(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  /**
   * 删除目录
   * @param id 目录的id
   */
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }
}
