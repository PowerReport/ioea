import { Module } from '@nestjs/common';
import { USER_ACCESSOR } from './services/user.accessor';
import { UserService } from './services/user.service';

const userAccessorProvider = {
  provide: USER_ACCESSOR,
  useClass: UserService,
};

@Module({
  providers: [userAccessorProvider],
  exports: [userAccessorProvider],
})
export class SharedModule {}
