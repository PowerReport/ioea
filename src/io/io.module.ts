import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { FileController } from './file.controller';
import { FolderController } from './folder.controller';
import { FileService } from './services/file.service';
import { repositoryProviders } from './entities/repository.providers';
import { FILE_SERVICE } from './services/file.interface';
import { FOLDER_SERVICE } from './services/folder.interface';
import { FolderService } from './services/folder.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FileController, FolderController],
  providers: [
    ...repositoryProviders,
    {
      provide: FILE_SERVICE,
      useClass: FileService,
    },
    {
      provide: FOLDER_SERVICE,
      useClass: FolderService,
    },
  ],
})
export class IoModule {}
