import { CreateItemDto } from '../dto/create-item.dto';
import { FileEntity } from '../entities/file.entity';

export const FILE_SERVICE = 'FILE_SERVICE';

export interface IFileService {
  /**
   * 新增文件
   * @param createFileDTO 需要新建的文件
   */
  post(createFileDTO: CreateItemDto): Promise<FileEntity>;
}
