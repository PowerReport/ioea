export const OBS_SERVICE = 'OBS_SERVICE';

/**
 * 对象存储服务
 */
export interface IObsService {
  /**
   * 复制文件，将文件从源路径复制到目标路径
   * @param source 源路径
   * @param target 目标路径
   */
  copy(source: string, target: string): Promise<void>;

  /**
   * 移除文件
   * @param target 目标路径
   */
  remove(target: string): Promise<void>;
}
