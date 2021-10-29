import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { FilesController } from './controllers/files.controller';
import { FoldersController } from './controllers/folders.controller';
import { FILE_SERVICE } from './services/file.interface';
import { FileService } from './services/file.service';
import { FOLDER_SERVICE } from './services/folder.interface';
import { FolderService } from './services/folder.service';
import { MIXIN_SERVICE } from './services/mixin.interface';
import { MixinService } from './services/mixin.service';
import { MixinsController } from './controllers/mixins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { FolderEntity } from './entities/folder.entity';
import { UserModule } from '../user/user.module';

const services = [
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

@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity, FolderEntity]),
    UserModule,
    SharedModule,
  ],
  controllers: [FilesController, FoldersController, MixinsController],
  providers: services,
})
export class FsModule {}
