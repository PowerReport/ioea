import { ApiProperty } from '@nestjs/swagger';

export class DuplicateCaseRequest {
  @ApiProperty({
    description: '拷贝的目录或文件的 `id`',
    type: String,
  })
  items: string[];

  @ApiProperty({
    description: '目录的 `id`',
    type: String,
  })
  dirId: string;

  @ApiProperty({
    description: '拷贝冲突时采取的方法。默认为警告。',
    type: Number,
    enum: { Warn: 0, Override: 1, Skip: 2 },
    default: 0,
    required: false,
  })
  copyType: CopyType = CopyType.Warn;
}

/**
 * 拷贝模式
 */
export enum CopyType {
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
