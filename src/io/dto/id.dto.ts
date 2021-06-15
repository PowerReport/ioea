import { ApiProperty } from '@nestjs/swagger';

export class IdDTO {
  @ApiProperty({
    description: 'ID',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: '类型。文件或目录。',
    type: String,
  })
  type: 'file' | 'folder';
}
