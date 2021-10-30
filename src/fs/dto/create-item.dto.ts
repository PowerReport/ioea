import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({
    name: 'name',
    description: '名称',
    type: String,
  })
  name: string;

  @ApiProperty({
    name: 'baseDirId',
    description: '上级文件夹的 id',
    type: Number,
  })
  baseDirId?: 'root' | number;
}
