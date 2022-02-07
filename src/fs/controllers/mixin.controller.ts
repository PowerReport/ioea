import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
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
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { DuplicateCaseRequest } from '../usecases/duplicate.case';
import { DeleteCaseRequest } from '../usecases/delete.case';
import { MoveCaseRequest } from '../usecases/move.case';
import { IMixinService, MIXIN_SERVICE } from '../service/mixin.interface';
import {
  FORM_DATA_MIME_TYPE,
} from '../../common/interceptors/form-data.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCaseRequest } from '../usecases/create.case';
import { GetCaseResponse } from '../usecases/get.case';
import { RenameCaseRequest, RenameCaseResponse } from '../usecases/rename.case';
import { TreeviewCaseResponse } from '../usecases/treeview.case';
import { Response } from 'express';

@ApiTags('目录文件服务')
@Controller('api/1/mixin')
export class MixinController {
  constructor(
    @Inject(MIXIN_SERVICE)
    private readonly mixinService: IMixinService,
  ) {}

  @Get(':id/browse')
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
    type: GetCaseResponse,
    isArray: true,
  })
  async browse(@Param('id') id: string): Promise<GetCaseResponse[]> {
    return await this.mixinService.browse(id);
  }

  @Get(':id/treeview')
  @ApiOperation({
    summary: '树视图',
    description: '获取指定目录的树视图',
  })
  @ApiParam({
    name: 'id',
    description: '目录的 `id`，`root` 表示根目录',
  })
  @ApiOkResponse({
    description: '返回指定目录的树视图',
    type: TreeviewCaseResponse,
  })
  async treeview(@Param('id') id: string): Promise<TreeviewCaseResponse> {
    return await this.mixinService.treeview(id);
  }

  @Post()
  @ApiOperation({
    summary: '新增',
    description: '新增目录或文件',
  })
  @ApiBody({
    description: '指定新增的目录或文件',
    type: CreateCaseRequest,
  })
  @ApiOkResponse({
    description: '返回新增的目录或文件',
    type: GetCaseResponse,
  })
  async post(@Body() request: CreateCaseRequest): Promise<GetCaseResponse> {
    return await this.mixinService.create(request);
  }

  @Put('name')
  @ApiOperation({
    summary: '重命名',
    description: '重命名目录或文件',
  })
  @ApiBody({
    description: '指定重命名的目录或文件',
    type: RenameCaseRequest,
  })
  @ApiOkResponse({
    description: '返回重命名的目录或文件',
    type: RenameCaseResponse,
  })
  async rename(@Body() request : RenameCaseRequest): Promise<RenameCaseResponse> {
    return await this.mixinService.rename(request);
  }

  @Post('duplicate')
  @ApiOperation({
    summary: '拷贝',
    description: '拷贝目录或文件',
  })
  @ApiBody({
    description: '指定拷贝的目录或文件',
    type: DuplicateCaseRequest,
  })
  @ApiNoContentResponse({
    description: '拷贝成功',
    status: HttpStatus.NO_CONTENT,
  })
  async duplicate(@Res() res: Response, @Body() request: DuplicateCaseRequest): Promise<void> {
    await this.mixinService.duplicate(request);

    res.sendStatus(HttpStatus.NO_CONTENT);
  }

  @Put('move')
  @ApiOperation({
    summary: '移动',
    description: '移动目录或文件',
  })
  @ApiBody({
    description: '指定移动的目录或文件',
    type: MoveCaseRequest,
  })
  @ApiNoContentResponse({
    description: '移动成功',
  })
  async move(@Res() res: Response, @Body() request: MoveCaseRequest): Promise<void> {
    await this.mixinService.move(request);

    res.sendStatus(HttpStatus.NO_CONTENT);
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
  @ApiNoContentResponse({
    description: '置顶成功',
  })
  async top(@Res() res: Response, @Param('id') id: string): Promise<void> {
    await this.mixinService.top(id);

    res.sendStatus(HttpStatus.NO_CONTENT);
  }

  @Delete()
  @ApiOperation({
    summary: '删除',
    description: '删除目录或文件',
  })
  @ApiBody({
    description: '指定删除的目录或文件',
    type: DeleteCaseRequest,
  })
  @ApiNoContentResponse({
    description: '删除成功',
  })
  async delete(@Res() res: Response, @Body() request: DeleteCaseRequest): Promise<void> {
    await this.mixinService.delete(request);

    res.sendStatus(HttpStatus.NO_CONTENT);
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
  @ApiNoContentResponse({
    description: '上传成功',
  })
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Res() res: Response, @UploadedFile() file: Express.Multer.File): Promise<void> {
    await this.mixinService.upload(file.originalname, file.buffer);

    res.sendStatus(HttpStatus.NO_CONTENT);
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
