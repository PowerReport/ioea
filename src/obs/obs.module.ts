import { Module } from '@nestjs/common';
import { OBS_SERVICE } from './obs.interface';
import { ObsService } from './obs.service';

const OBS_SERVICE_PROVIDER = {
  provide: OBS_SERVICE,
  useClass: ObsService,
};

@Module({
  providers: [OBS_SERVICE_PROVIDER],
  exports: [OBS_SERVICE_PROVIDER],
})
export class ObsModule {}
