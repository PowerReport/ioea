import { IRecycleBinService } from './recycle-bin.interface';

export class RecycleBinService implements IRecycleBinService {
  getAll(sub: string) {
    throw new Error('not implemented.');
  }
}
