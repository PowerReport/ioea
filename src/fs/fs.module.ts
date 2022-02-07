import { Module } from '@nestjs/common';
import { FilesController } from './controllers/files.controller';
import { FILE_SERVICE } from './service/file.interface';
import { FileService } from './service/file.service';
import { MIXIN_SERVICE } from './service/mixin.interface';
import { MixinService } from './service/mixin.service';
import { MixinController } from './controllers/mixin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from '../domain/file/model/file.entity';
import { DirEntity } from '../domain/dir/model/dir.entity';
import { UserModule } from '../domain/user/user.module';
import { SharedModule } from '../shared/shared.module';

const services = [
  {
    provide: FILE_SERVICE,
    useClass: FileService,
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
