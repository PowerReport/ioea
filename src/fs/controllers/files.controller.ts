import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
  Res,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Manifest } from '../manifest';
import { FILE_SERVICE, IFileService } from '../services/file.interface';

@ApiTags('目录文件服务')
@Controller('api/1/files')
export class FilesController {
  constructor(
    @Inject(FILE_SERVICE)
    private readonly fileService: IFileService,
  ) {}

  @Get(':id/manifest')
  @ApiOperation({
    summary: '获取文件 Manifest',
    description: '获取文件 Manifest',
  })
  @ApiParam({
    name: 'id',
    description: '文件的 `id`',
    type: Number,
  })
  @ApiOkResponse({
    description: '返回文件 Manifest',
    type: Manifest,
  })
  async getManifest(@Param('id', ParseIntPipe) id: number): Promise<Manifest> {
    return await this.fileService.getManifest(id);
  }

  @Get(':id/preview')
  @ApiOperation({
    summary: '预览文件',
    description: '预览文件',
  })
  @ApiParam({
    name: 'id',
    description: '文件的 `id`',
    type: Number,
  })
  @ApiQuery({
    name: 'version',
    description: '文件的版本',
    type: Number,
    required: false,
  })
  @ApiOkResponse({
    description: '返回文件的内容',
    type: String,
  })
  async preview(
    @Param('id', ParseIntPipe) id: number,
    @Query('version') version?: number | undefined, // TODO: 可选参数的 ParseInt pipe
  ): Promise<string> {
    return await this.fileService.preview(id, version);
  }

  /**
   * 导出
   * @param id 文件的id
   * @param type 文件类型
   */
  @Get(':id')
  @ApiOperation({
    summary: '导出',
    description: '导出',
  })
  @ApiParam({
    name: 'id',
    description: '文件的 `id`',
    type: Number,
  })
  @ApiOkResponse({
    description: '返回二进制数据',
    type: Buffer,
  })
  async export(@Res() res: Response, @Param('id', ParseIntPipe) id: number): Promise<void> {
    const file = await this.fileService.export(id);
    res.sendFile(file);
  }
}
