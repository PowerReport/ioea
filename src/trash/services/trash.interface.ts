import { TrashDto } from "../dto/trash.dto";

export const TRASH_SERVICE = 'TRASH_SERVICE';

/**
 * 回收站服务
 */
export interface ITrashService {
  /**
   * 浏览
   */
  browse(): Promise<TrashDto[]>;
}
