import { Module } from '@nestjs/common';
import { USER_ACCESSOR } from './services/user.accessor';
import { UserService } from './services/user.service';

const userAccessorProviders = {
  provide: USER_ACCESSOR,
  useClass: UserService,
};

@Module({
  providers: [userAccessorProviders],
  exports: [userAccessorProviders],
})
export class SharedModule {}
