export const RECYCLE_BIN_SERVICE = 'RECYCLE_BIN_SERVICE';

export interface IRecycleBinService {
  getAll(sub: string);
}
