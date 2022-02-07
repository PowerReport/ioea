import { Injectable } from '@nestjs/common';
import { GetTrashCaseResponse } from '../usecases/get-trash.case';
import { ITrashService } from './trash.interface';

@Injectable()
export class TrashService implements ITrashService {
  browse(): Promise<GetTrashCaseResponse[]> {
    // TODO: 实现服务
    throw new Error('Method not implemented.');
  }
}
