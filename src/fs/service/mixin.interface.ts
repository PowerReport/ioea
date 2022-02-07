import { DuplicateCaseRequest } from '../usecases/duplicate.case';
import { DeleteCaseRequest } from '../usecases/delete.case';
import { MoveCaseRequest } from '../usecases/move.case';
import { GetCaseResponse } from '../usecases/get.case';
import { CreateCaseRequest } from '../usecases/create.case';
import { RenameCaseRequest, RenameCaseResponse } from '../usecases/rename.case';
import { TreeviewCaseResponse } from '../usecases/treeview.case';

export const MIXIN_SERVICE = 'MixinService';

/**
 * 目录文件服务
 */
export interface IMixinService {
  /**
   * 浏览
   * @param id
   */
  browse(id: string): Promise<GetCaseResponse[]>;

  /**
   * 树视图
   * @param id
   */
  treeview(id: string): Promise<TreeviewCaseResponse>;

  /**
   * 新建
   * @param request
   * @returns
   */
  create(request: CreateCaseRequest): Promise<GetCaseResponse>;

  /**
   * 重命名
   * @param request
   */
  rename(request: RenameCaseRequest): Promise<RenameCaseResponse>;

  /**
   * 拷贝
   * @param request
   */
  duplicate(request: DuplicateCaseRequest): Promise<void>;

  /**
   * 移动
   * @param request
   */
  move(request: MoveCaseRequest): Promise<GetCaseResponse>;

  /**
   * 置顶
   * @param id
   */
  top(id: string): Promise<GetCaseResponse>;

  /**
   * 删除
   * @param request
   */
  delete(request: DeleteCaseRequest): Promise<void>;

  /**
   * 上传
   * @param filename
   * @param content
   */
  upload(filename: string, content: Buffer): Promise<void>;

  /**
   * 下载
   * @param id
   */
  download(id: string): Promise<string>;
}
