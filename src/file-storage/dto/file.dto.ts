import { ApiProperty } from '@nestjs/swagger';

export class FileDTO {
  @ApiProperty({
    name: 'id',
    description: '文件的id',
    type: Number,
  })
  id: number;

  @ApiProperty({
    name: 'name',
    description: '文件的名称',
    type: String,
  })
  name: string;

  @ApiProperty({
    name: 'ext',
    description: '文件的后缀',
    type: String,
  })
  ext: string;

  @ApiProperty({
    name: 'owner',
    description: '文件的所有者',
    type: String,
  })
  owner: string;

  @ApiProperty({
    name: 'creator',
    description: '文件的创建者',
    type: String,
  })
  creator: string;

  @ApiProperty({
    name: 'createTime',
    description: '文件创建时间',
    type: Date,
  })
  createTime: Date;

  @ApiProperty({
    name: 'lastModified',
    description: '文件最后修改时间',
    type: Date,
  })
  lastModified: Date;
}
