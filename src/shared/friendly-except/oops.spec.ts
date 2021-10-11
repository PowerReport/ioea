import { Oops } from './oops';

enum ErrorCodes {
  ARGUMENT_EXCEPTION = '[S400]错误的参数',

  ITEM_NOT_FOUND = '[I404]无法找到该项目',
  ITEM_PERMISSION_DENIED = '[I403]您没有当前项目【{0}】的权限',
  ITEM_REVOKED = '[I600]项目[{0}]已经被撤回[系统消息]',
}

test('测试抛服务器异常', () => {
  const except = Oops.oh(ErrorCodes.ARGUMENT_EXCEPTION);
  expect(except.errorCode).toBe('S400');
  expect(except.message).toBe('错误的参数');
  expect(except.statusCode).toBe(500);
});

test('测试抛业务异常', () => {
  const except = Oops.bah(ErrorCodes.ITEM_NOT_FOUND);
  expect(except.errorCode).toBe('I404');
  expect(except.message).toBe('无法找到该项目');
  expect(except.statusCode).toBe(400);
});

test('测试参数', () => {
  const except = Oops.bah(ErrorCodes.ITEM_PERMISSION_DENIED, '商品');
  expect(except.errorCode).toBe('I403');
  expect(except.message).toBe('您没有当前项目【商品】的权限');
  expect(except.statusCode).toBe(400);
});

test('测试存在关键符号的异常消息', () => {
  const except = Oops.bah(ErrorCodes.ITEM_REVOKED, '申请');
  expect(except.errorCode).toBe('I600');
  expect(except.message).toBe('项目[申请]已经被撤回[系统消息]');
  expect(except.statusCode).toBe(400);
});

test('测试普通的异常消息', () => {
  const except = Oops.oh('发生了错误');
  expect(except.errorCode).toBe('0');
  expect(except.message).toBe('发生了错误');
  expect(except.statusCode).toBe(500);
});
