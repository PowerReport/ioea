import { ApiProperty } from '@nestjs/swagger';

export class IdDTO {
  @ApiProperty({
    description: '标识',
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: '类型。文件或文件夹。',
    type: String,
  })
  type: 'file' | 'dir';
}
