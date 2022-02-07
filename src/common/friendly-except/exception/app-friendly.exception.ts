import { HttpStatus } from '@nestjs/common';

/**
 * 友好异常类
 */
export class AppFriendlyException extends Error {
  constructor(
    message: string,
    errorCode: string,
    statusCode?: number | undefined,
  ) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  }

  /**
   * 错误码
   */
  public errorCode: string;

  /**
   * 状态码
   */
  public statusCode: number;

  /**
   * 配置状态码
   * @param statusCode 状态码
   */
  public setStatusCode(statusCode: number): AppFriendlyException {
    this.statusCode = statusCode;
    return this;
  }
}
