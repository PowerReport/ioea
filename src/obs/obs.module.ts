import { Module } from '@nestjs/common';
import { OBS_SERVICE } from './obs.interface';
import { ObsService } from './obs.service';

const obsServiceProvider = {
  provide: OBS_SERVICE,
  useClass: ObsService,
};

@Module({
  providers: [obsServiceProvider],
  exports: [obsServiceProvider],
})
export class ObsModule {}
