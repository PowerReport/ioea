import { ApiProperty } from '@nestjs/swagger';

/**
 * 移动 DTO
 */
export class MoveItemDto {
  @ApiProperty({
    description: '移动的目录或文件',
    type: String,
    isArray: true,
  })
  items: string[];

  @ApiProperty({
    description: '目标目录',
    type: String,
  })
  targetId: string;

  @ApiProperty({
    description: '移动冲突时采取的方法。默认为警告。',
    type: Number,
    enum: { Warn: 0, Override: 1, Skip: 2 },
    default: 0,
    required: false,
  })
  moveType: MoveType = MoveType.Warn;
}

/**
 * 移动模式
 */
export enum MoveType {
  /**
   * 警告
   */
  Warn = 0,

  /**
   * 替换
   * @description 合并文件夹，并替换相同名称的文件。
   */
  Override = 1,

  /**
   * 跳过
   * @description 合并文件夹，并跳过相同名称的文件。
   */
  Skip = 2,
}
