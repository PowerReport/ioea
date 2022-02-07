import { ApiProperty } from '@nestjs/swagger';

export class CreateCaseRequest {
  @ApiProperty({
    name: 'name',
    description: '名称',
    type: String,
  })
  name: string;

  @ApiProperty({
    name: 'baseDirId',
    description: '上级文件夹的 id',
    type: String,
  })
  baseDirId?: string | undefined;
}
