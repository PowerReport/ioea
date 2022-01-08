import { ApiProperty } from "@nestjs/swagger";

/**
 * 重命名 DTO
 */
export class RenameItemDto {
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