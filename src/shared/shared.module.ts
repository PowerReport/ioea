import { Module } from '@nestjs/common';
import { USER_ACCESSOR } from './services/user.accessor';
import { UserService } from './services/user.service';

@Module({
  exports: [
    {
      provide: USER_ACCESSOR,
      useClass: UserService,
    },
  ],
})
export class SharedModule {}
