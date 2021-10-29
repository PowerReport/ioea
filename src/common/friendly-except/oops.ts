import { AppFriendlyException } from './exceptions/app-friendly.exception';
import { HttpStatus } from '@nestjs/common';

/**
 * 抛异常静态类
 */
export class Oops {
  /**
   * 返回字符串异常信息
   * @example
   * enum ErrorCodes {
   *   ARGUMENT_EXCEPTION = '[S400]错误的参数'
   * }
   * throw Oops.oh(ErrorCodes.ARGUMENT_EXCEPTION);
   * @param message 异常消息，
   * @param params 参数
   */
  public static oh(message: string, ...params: string[]): AppFriendlyException {
    const { errorMessage, errorCode } = this.montageErrorMessage(
      message,
      ...params,
    );
    return new AppFriendlyException(errorMessage, errorCode);
  }

  /**
   * 返回业务异常信息
   * @example
   * enum ErrorCodes {
   *   ITEM_NOT_FOUND = '[I404]无法找到该项目'
   * }
   * throw Oops.bah(ErrorCodes.ITEM_NOT_FOUND);
   * @param message 异常消息
   * @param params 参数
   */
  public static bah(
    message: string,
    ...params: string[]
  ): AppFriendlyException {
    return this.oh(message, ...params).setStatusCode(HttpStatus.BAD_REQUEST);
  }

  /**
   * 根据异常消息获取错误码和错误信息
   * @param message 异常消息
   * @param params 参数
   * @private
   */
  private static montageErrorMessage(message: string, ...params: string[]) {
    let errorCode = '0';
    let errorMessage = message;

    // 读取错误码和错误消息
    if (message.startsWith('[') && message.includes(']')) {
      const index = message.indexOf(']');
      errorCode = message.slice(1, index);
      errorMessage = message.slice(index + 1);
    }

    // 多语言处理
    // TODO: 在这里写处理多语言的代码

    // 处理参数
    if (params.length > 0) {
      for (const k in params) {
        errorMessage = errorMessage.replace(`{${k}}`, params[k]);
      }
    }

    return {
      errorMessage: errorMessage,
      errorCode: errorCode,
    };
  }
}
