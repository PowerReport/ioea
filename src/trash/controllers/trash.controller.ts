import { Controller, Get, Inject } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetTrashCaseResponse } from "../usecases/get-trash.case";
import { ITrashService, TRASH_SERVICE } from "../service/trash.interface";

@ApiTags('回收站服务')
@Controller('api/1/trash')
export class TrashController {
  constructor(
    @Inject(TRASH_SERVICE)
    private readonly trashService: ITrashService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '浏览',
    description: '浏览回收站的目录或文件',
  })
  @ApiOkResponse({
    description: '返回回收站中的目录或文件',
    type: GetTrashCaseResponse,
    isArray: true,
  })
  async browse(): Promise<GetTrashCaseResponse[]> {
    return await this.trashService.browse();
  }
}