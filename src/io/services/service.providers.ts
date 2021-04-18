import { FILE_SERVICE } from './file.interface';
import { FileService } from './file.service';
import { FOLDER_SERVICE } from './folder.interface';
import { FolderService } from './folder.service';

export const serviceProviders = [
  {
    provide: FILE_SERVICE,
    useClass: FileService,
  },
  {
    provide: FOLDER_SERVICE,
    useClass: FolderService,
  },
];
