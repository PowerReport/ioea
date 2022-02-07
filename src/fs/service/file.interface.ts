import { Manifest } from "../../domain/manifest/model/manifest";

export const FILE_SERVICE = 'FILE_SERVICE';

/**
 * 文件服务
 */
export interface IFileService {
  /**
   * 获取文件 Manifest
   * @param id
   */
  getManifest(id: string): Promise<Manifest>;

  /**
   * 文件预览
   * @param id 
   * @param version 
   */
  preview(id: string, version?: number | undefined): Promise<string>;

  /**
   * 文件导出
   * @param id 
   */
  export(id: string): Promise<string>;
}
