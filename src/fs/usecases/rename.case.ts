import { ApiProperty } from "@nestjs/swagger";

export class RenameCaseRequest {
  @ApiProperty({
    description: '目录或文件的 `id`',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: '新的名称',
    type: String,
  })
  name: string;
}

export class RenameCaseResponse {
  @ApiProperty({
    description: '唯一标识',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: '名称',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: '最后修改时间',
    type: Date,
  })
  lastModified: Date;
}