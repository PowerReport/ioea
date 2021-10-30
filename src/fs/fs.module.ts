import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { FilesController } from './controllers/files.controller';
import { FILE_SERVICE } from './services/file.interface';
import { FileService } from './services/file.service';
import { DIR_SERVICE } from './services/dir.interface';
import { DirService } from './services/dir.service';
import { MIXIN_SERVICE } from './services/mixin.interface';
import { MixinService } from './services/mixin.service';
import { MixinController } from './controllers/mixin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { DirEntity } from './entities/dir.entity';
import { UserModule } from '../user/user.module';

const services = [
  {
    provide: FILE_SERVICE,
    useClass: FileService,
  },
  {
    provide: DIR_SERVICE,
    useClass: DirService,
  },
  {
    provide: MIXIN_SERVICE,
    useClass: MixinService,
  },
];

@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity, DirEntity]),
    UserModule,
    SharedModule,
  ],
  controllers: [FilesController, MixinController],
  providers: services,
})
export class FsModule {}
