import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
  @ApiProperty({
    name: 'id',
    description: '标识',
    type: Number,
  })
  id: number;

  @ApiProperty({
    name: 'name',
    description: '名称',
    type: String,
  })
  name: string;

  @ApiProperty({
    name: 'isDir',
    description: '是否目录',
    type: Boolean,
  })
  isDir: boolean;

  @ApiProperty({
    name: 'owner',
    description: '所有者',
    type: String,
  })
  owner: string;

  @ApiProperty({
    name: 'creator',
    description: '创建者',
    type: String,
  })
  creator: string;

  @ApiProperty({
    name: 'createTime',
    description: '创建时间',
    type: Date,
  })
  createTime: Date;

  @ApiProperty({
    name: 'lastModified',
    description: '最后修改时间',
    type: Date,
  })
  lastModified: Date;
}
