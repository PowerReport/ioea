import { Module } from '@nestjs/common';
import { RECYCLE_BIN_SERVICE } from './services/recycle-bin.interface';
import { RecycleBinService } from './services/recycle-bin.service';

@Module({
  exports: [
    {
      provide: RECYCLE_BIN_SERVICE,
      useClass: RecycleBinService,
    },
  ],
})
export class RecycleBinModule {}
