import { FileDTO } from '../dto/file.dto';

export const FILE_SERVICE = 'FILE_SERVICE';

export interface IFileService {
  /**
   * 获取文件列表
   * @param search 检索关键字
   * @param sortBy 排序
   * @param page 页码
   * @param pageSize 页码大小
   */
  getAll(
    search?: string | undefined,
    sortBy?: string | undefined,
    page?: number | undefined,
    pageSize?: number | undefined,
  ): Promise<FileDTO[]>;

  getById(id: number): Promise<FileDTO>;
}
