import { BadRequestException } from '@nestjs/common';
import { FileEntity } from '../entities/file.entity';

const FileNameRegex = /^.?([a-zA-Z0-9-_@.]|[^\x00-\xff])+$/;
const FileExtRegex = /^\.[a-zA-Z]+$/;

export class FileValidator {
  validateName(file: FileEntity): void {
    if (!FileNameRegex.test(file.name)) {
      throw new BadRequestException('文件名不能包含下列任何字符：\\/:*"<>|');
    }
  }

  validateExt(file: FileEntity): void {
    if (!FileExtRegex.test(file.ext)) {
      throw new BadRequestException('文件扩展名只能以.号开头，以英文字符结尾');
    }
  }
}
