import { ApiProperty } from '@nestjs/swagger';

export class DeleteItemDTO {
  @ApiProperty({
    description: '删除的方法',
    type: Number,
    enum: { Cascade: 0, TargetFolderOnly: 1 },
    default: 0,
    required: false,
  })
  deletionType: DeletionType = DeletionType.Cascade;
}

export enum DeletionType {
  /**
   * 级联删除。
   */
  Cascade = 0,

  /**
   * 仅目标文件夹，目标文件夹下的内容将移动到根文件夹。
   */
  TargetFolderOnly = 1,
}
