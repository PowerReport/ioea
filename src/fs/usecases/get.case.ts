import { ApiProperty } from '@nestjs/swagger';

export class GetCaseResponse {
  @ApiProperty({
    description: '唯一标识',
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: '名称',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: '是否目录',
    type: Boolean,
  })
  isDir: boolean;

  @ApiProperty({
    description: '所有者',
    type: String,
  })
  owner: string;

  @ApiProperty({
    description: '创建者',
    type: String,
  })
  creator: string;

  @ApiProperty({
    description: '创建时间',
    type: Date,
  })
  createTime: Date;

  @ApiProperty({
    description: '最后修改时间',
    type: Date,
  })
  lastModified: Date;
}
