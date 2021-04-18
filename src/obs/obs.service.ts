import { IObsService } from './obs.interface';

export class ObsService implements IObsService {
  copy(source: string, target: string): Promise<void> {
    throw new Error('not implemented.');
  }

  remove(target: string): Promise<void> {
    throw new Error('not implemented.');
  }

  private isLocal(src: string): boolean {
    throw new Error('not implemented.');
  }
}
