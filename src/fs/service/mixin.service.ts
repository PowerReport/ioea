import { Injectable } from '@nestjs/common';
import { DuplicateCaseRequest } from '../usecases/duplicate.case';
import { DeleteCaseRequest } from '../usecases/delete.case';
import { MoveCaseRequest } from '../usecases/move.case';
import { IMixinService } from './mixin.interface';
import { GetCaseResponse } from '../usecases/get.case';
import { CreateCaseRequest } from '../usecases/create.case';
import { TreeviewCaseResponse } from '../usecases/treeview.case';
import { RenameCaseRequest, RenameCaseResponse } from '../usecases/rename.case';

@Injectable()
export class MixinService implements IMixinService {
  browse(id: string): Promise<GetCaseResponse[]> {
    // TODO: 实现服务
    console.log(id);
    throw new Error('Method not implemented.');
  }

  treeview(id: string): Promise<TreeviewCaseResponse> {
    // TODO: 实现服务
    console.log(id);
    throw new Error('Method not implemented.');
  }

  create(request: CreateCaseRequest): Promise<GetCaseResponse> {
    // TODO: 实现服务
    console.log(request);
    throw new Error('Method not implemented.');
  }

  rename(request: RenameCaseRequest): Promise<RenameCaseResponse> {
    // TODO: 实现服务
    console.log(request);
    throw new Error('Method not implemented.');
  }

  duplicate(request: DuplicateCaseRequest): Promise<void> {
    // TODO: 实现服务
    console.log(request);
    throw new Error('Method not implemented.');
  }

  move(request: MoveCaseRequest): Promise<GetCaseResponse> {
    // TODO: 实现服务
    console.log(request);
    throw new Error('Method not implemented.');
  }

  top(id: string): Promise<GetCaseResponse> {
    // TODO: 实现服务
    console.log(id);
    throw new Error('Method not implemented.');
  }

  delete(request: DeleteCaseRequest): Promise<void> {
    // TODO: 实现服务
    console.log(request);
    throw new Error('Method not implemented.');
  }
  
  upload(filename: string, content: Buffer): Promise<void> {
    // TODO: 实现服务
    console.log(filename, content);
    throw new Error('Method not implemented.');
  }
  
  download(id: string): Promise<string> {
    // TODO: 实现服务
    console.log(id);
    throw new Error('Method not implemented.');
  }
}
