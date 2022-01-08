import { Id } from './id';
import each from 'jest-each';

each([
  ['root', 0, true, true],
  ['99', 99, true, false],
  ['dir!100', 100, true, false],
  ['file!19', 19, false, false],
]).test(
  '测试正确的 id - %s',
  (
    input: string,
    expectedId: number,
    isDir: boolean,
    isRoot: boolean,
  ) => {
    const id = new Id(input);

    expect(id.realId).toBe(expectedId);
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
  const id = new Id(input);

  expect(id).toBe(undefined);
});
