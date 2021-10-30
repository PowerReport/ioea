import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FILE_SERVICE, IFileService } from '../services/file.interface';

/**
 * 文件服务
 */
@ApiTags('文件服务')
@Controller('api/1/files')
export class FilesController {
  constructor(
    @Inject(FILE_SERVICE)
    private readonly fileService: IFileService,
  ) {}

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
   * 导出
   * @param id 文件的id
   * @param type 文件类型
   */
  @Get(':id/:type')
  export(@Param('id', ParseIntPipe) id: number, @Param('type') type: string) {
    throw new Error('not implemented.');
  }
}
