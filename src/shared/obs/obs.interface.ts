export const OBS_SERVICE = 'OBS_SERVICE';

/**
 * 对象存储服务
 */
export interface IObsService {
  /**
   * 获取指定的云端文件
   * @param key 远端文件的 key
   */
  get(key: string): Promise<Buffer>;

  /**
   * 上传指定文件到云端
   * @param key 云端文件的 key
   * @param buf 文件的二进制数据
   * @param contentType 媒体类型，默认值为 application/octet-stream
   */
  put(
    key: string,
    buf: Buffer,
    contentType?: string | undefined,
  ): Promise<void>;

  /**
   * 移除指定的云端文件
   * @param key 云端文件的 key
   */
  remove(key: string): Promise<void>;
}
