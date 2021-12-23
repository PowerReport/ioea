import { FileValidator } from './file-validator';
import each from 'jest-each';

each([
  'abc',
  '我的文件',
  '1—我的文件',
  '1_我的',
  '1、我的',
  '1@、我的',
  '@、我的',
  '_我的',
  '_【我的】',
]).test('测试合法的文件名称验证 - %s', (inputName) => {
  FileValidator.validateName(inputName);
});

each([
  'Holler%/',
  'newfile/',
  'myfile*',
  'work:',
  'play<',
  '123>',
  'game|',
]).test('测试包含特殊字符的文件名称验证 - %s', (inputName) => {
  const validateName = () => FileValidator.validateName(inputName);
  expect(validateName).toThrow('文件名不能包含下列任何字符：\\/:*"<>|');
});

each(['.abc', '.zip']).test('测试合法的文件扩展名验证 - %s', (inputName) => {
  FileValidator.validateExt(inputName);
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
]).test('测试包含特殊字符的文件扩展名验证 - %s', (inputExt) => {
  const validateExt = () => FileValidator.validateExt(inputExt);
  expect(validateExt).toThrow('文件扩展名只能以.号开头，以英文字符结尾');
});
