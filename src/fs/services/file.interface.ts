import { Manifest } from "../manifest";

export const FILE_SERVICE = 'FILE_SERVICE';

/**
 * 文件服务
 */
export interface IFileService {
  /**
   * 获取文件 Manifest
   * @param id
   */
  getManifest(id: number): Promise<Manifest>;

  /**
   * 文件预览
   * @param id 
   * @param version 
   */
  preview(id: number, version?: number | undefined): Promise<string>;

  /**
   * 文件导出
   * @param id 
   */
  export(id: number): Promise<string>;
}
