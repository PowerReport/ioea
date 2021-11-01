import { parseId } from './id';
import each from 'jest-each';

each([
  ['root', 0, 'dir', true, true],
  ['99', 99, 'dir', true, false],
  ['dir!100', 100, 'dir', true, false],
  ['file!19', 19, 'file', false, false],
]).test(
  '测试正确的 id - %s',
  (
    input: string,
    expectedId: number,
    expectedType: string,
    isDir: boolean,
    isRoot: boolean,
  ) => {
    const id = parseId(input);

    expect(id.id).toBe(expectedId);
    expect(id.type).toBe(expectedType);
    expect(id.isDir).toBe(isDir);
    expect(id.isRoot).toBe(isRoot);
  },
);

each([
  'dir!-1',
  'dir!0',
  'file!-1',
  'file!0',
  'dir#80',
  'file@12',
  'dir',
  '!19',
]).test('测试错误的 id - %s', (input: string) => {
  const id = parseId(input);

  expect(id).toBe(undefined);
});
