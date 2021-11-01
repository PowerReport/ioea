import { ApiProperty } from '@nestjs/swagger';

export class MoveItemDTO {
  @ApiProperty({
    description: '移动的元素',
    type: Number,
  })
  items: number[];

  @ApiProperty({
    description: '目标目录',
    type: String,
  })
  targetId: 'root' | number;

  @ApiProperty({
    description: '移动冲突时采取的方法。默认为警告。',
    type: Number,
    enum: { Warn: 0, Override: 1, Skip: 2 },
    default: 0,
    required: false,
  })
  moveType: MoveType = MoveType.Warn;
}

export enum MoveType {
  /**
   * 警告
   */
  Warn = 0,

  /**
   * 替换。合并文件夹，并替换相同名称的文件。
   */
  Override = 1,

  /**
   * 跳过。合并文件夹，并跳过相同名称的文件。
   */
  Skip = 2,
}
