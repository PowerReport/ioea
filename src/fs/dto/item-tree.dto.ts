import { ApiProperty } from "@nestjs/swagger";
import { ItemDto } from "./item.dto";

/**
 * 目录或文件树 DTO
 */
export class ItemTreeDto extends ItemDto {
  @ApiProperty({
    description: '子级目录或文件',
    type: ItemTreeDto,
    isArray: true,
  })
  children: ItemTreeDto[];
}