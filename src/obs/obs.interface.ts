export const OBS_SERVICE = 'OBS_SERVICE';

export interface IObsService {
  get(key: string);

  set<T>(key: string, value: T);

  remove(key: string);
}
