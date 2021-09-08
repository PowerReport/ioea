import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

const FileNameRegex = /^.?([a-zA-Z0-9-_@.]|[^\x00-\xff])+$/;
const FileExtRegex = /^\.[a-zA-Z]+$/;

/**
 * 文件名称是否合法
 */
@ValidatorConstraint()
export class ValidateName implements ValidatorConstraintInterface {
  validate(name: string): boolean | Promise<boolean> {
    return FileNameRegex.test(name);
  }

  defaultMessage(): string {
    return '文件名不能包含下列任何字符：\\/:*"<>|';
  }
}

/**
 * 文件扩展名是否合法
 */
@ValidatorConstraint()
export class ValidateExt implements ValidatorConstraintInterface {
  validate(ext: string): boolean | Promise<boolean> {
    return FileExtRegex.test(ext);
  }

  defaultMessage(): string {
    throw new Error('文件扩展名只能以.号开头，以英文字符结尾');
  }
}
