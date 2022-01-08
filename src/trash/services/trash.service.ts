import { Injectable } from '@nestjs/common';
import { TrashDto } from '../dto/trash.dto';
import { ITrashService } from './trash.interface';

@Injectable()
export class TrashService implements ITrashService {
  browse(): Promise<TrashDto[]> {
    throw new Error('Method not implemented.');
  }
}
