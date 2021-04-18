export const OBS_SERVICE = 'OBS_SERVICE';

/**
 * 对象存储服务
 */
export interface IObsService {
  /**
   * 复制文件，将文件从源路径复制到目标路径
   * @param source 源路径
   * @param target 目标路径
   * @description 源路径以 local: 开头，并且目标路径以 cloud: 开头，则将本地文件上传至云端
   * @description 源路径以 cloud: 开头，并且目标路径以 local: 开头，则将云端文件下载至本地
   * @description 源路径以 cloud: 开头，并且目标路径以 cloud: 开头，则将云端文件拷贝至云端（针对不同用户之间的操作）
   * @description 源路径以 local: 开头，并且目标路径以 local: 开头，则将本地文件拷贝至本地（针对不同用户之间的操作）
   */
  copy(source: string, target: string): Promise<void>;

  /**
   * 移除文件
   * @param source 源路径
   * @description 源路径以 cloud: 开头，移除云端文件
   * @description 源路径以 local: 开头，移除本地文件
   */
  remove(source: string): Promise<void>;
}
