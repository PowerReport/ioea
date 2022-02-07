import { Oops } from "../../../common/friendly-except/oops";

const FileNameRegex = /^.?([a-zA-Z0-9-_@.]|[^\x00-\xff])+$/;
const FileExtRegex = /^\.[a-zA-Z]+$/;

export class FileValidator {
  public static validateName(name: string): void {
    if (!FileNameRegex.test(name)) {
      throw Oops.bah('文件名不能包含下列任何字符：\\/:*"<>|');
    }
  }

  public static validateExt(ext: string): void {
    if (!FileExtRegex.test(ext)) {
      throw Oops.bah('文件扩展名只能以.号开头，以英文字符结尾');
    }
  }
}
