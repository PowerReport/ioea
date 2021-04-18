import { RECYCLE_BIN_SERVICE } from './recycle-bin.interface';
import { RecycleBinService } from './recycle-bin.service';

export const serviceProviders = [
  {
    provide: RECYCLE_BIN_SERVICE,
    useClass: RecycleBinService,
  },
];
