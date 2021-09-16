import { FileValidator } from './file-validator';
import each from 'jest-each';

each([
  'Holler%/',
  'newfile/',
  'myfile*',
  'work:',
  'play<',
  '123>',
  'game|',
]).test('文件名称特殊字符验证测试 - %s', (inputName) => {
  const validateName = () => FileValidator.validateName(inputName);
  expect(validateName).toThrow('文件名不能包含下列任何字符：\\/:*"<>|');
});

each([
  'txt',
  '.123',
  '123',
  './g',
  '.%',
  '.***',
  '.\\xxx',
  '.txt:',
  '.:txt',
  '.<link>',
  '.py<',
  '.py>',
  '.(js)',
  '.ts)',
  '.ts(',
]).test('文件扩展名特殊字符验证测试 - %s', (inputExt) => {
  const validateExt = () => FileValidator.validateExt(inputExt);
  expect(validateExt).toThrow('文件扩展名只能以.号开头，以英文字符结尾');
});
