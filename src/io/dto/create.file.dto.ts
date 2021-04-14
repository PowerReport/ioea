import { ApiProperty } from '@nestjs/swagger';

export class CreateFileDTO {
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
}
