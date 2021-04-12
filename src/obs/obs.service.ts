import { IObsService } from './obs.interface';

export class ObsService implements IObsService {
  get(key: string) {
    return new Error('not implemented.');
  }

  remove(key: string) {
    return new Error('not implemented.');
  }

  set<T>(key: string, value: T) {
    return new Error('not implemented.');
  }
}
