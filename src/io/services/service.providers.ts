import { FILE_SERVICE } from './file.interface';
import { FileService } from './file.service';
import { FOLDER_SERVICE } from './folder.interface';
import { FolderService } from './folder.service';
import { MIXIN_SERVICE } from './mixin.interface';
import { MixinService } from './mixin.service';

export const serviceProviders = [
  {
    provide: FILE_SERVICE,
    useClass: FileService,
  },
  {
    provide: FOLDER_SERVICE,
    useClass: FolderService,
  },
  {
    provide: MIXIN_SERVICE,
    useClass: MixinService,
  },
];
