import { Module } from '@nestjs/common';
import { USER_ACCESSOR } from './services/user.accessor';
import { UserService } from './services/user.service';

const USER_ACCESSOR_PROVIDER = {
  provide: USER_ACCESSOR,
  useClass: UserService,
};

@Module({
  providers: [USER_ACCESSOR_PROVIDER],
  exports: [USER_ACCESSOR_PROVIDER],
})
export class UserModule {}
