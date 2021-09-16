import { FILE_SERVICE } from './file.interface';
import { FileService } from './file.service';
import { FOLDER_SERVICE } from './folder.interface';
import { FolderService } from './folder.service';
import { MIXIN_SERVICE } from './mixin.interface';
import { MixinService } from './mixin.service';

const FILE_SERVICE_PROVIDER = {
  provide: FILE_SERVICE,
  useClass: FileService,
};

const FOLDER_SERVICE_PROVIDER = {
  provide: FOLDER_SERVICE,
  useClass: FolderService,
};

const MIXIN_SERVICE_PROVIDER = {
  provide: MIXIN_SERVICE,
  useClass: MixinService,
};

export {
  FILE_SERVICE_PROVIDER,
  FOLDER_SERVICE_PROVIDER,
  MIXIN_SERVICE_PROVIDER,
};
