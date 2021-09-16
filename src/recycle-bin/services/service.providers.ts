import { RECYCLE_BIN_SERVICE } from './recycle-bin.interface';
import { RecycleBinService } from './recycle-bin.service';

const RECYCLE_BIN_SERVICE_PROVIDER = {
  provide: RECYCLE_BIN_SERVICE,
  useClass: RecycleBinService,
};

export { RECYCLE_BIN_SERVICE_PROVIDER };
