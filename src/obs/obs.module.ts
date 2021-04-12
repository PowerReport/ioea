import { Module } from '@nestjs/common';
import { OBS_SERVICE } from './obs.interface';
import { ObsService } from './obs.service';

@Module({
  exports: [
    {
      provide: OBS_SERVICE,
      useClass: ObsService,
    },
  ],
})
export class ObsModule {}
