import { Module } from '@nestjs/common';
import { USER_ACCESSOR } from './services/user.accessor';
import { UserService } from './services/user.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration/configuration';

const USER_ACCESSOR_PROVIDER = {
  provide: USER_ACCESSOR,
  useClass: UserService,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [USER_ACCESSOR_PROVIDER],
  exports: [USER_ACCESSOR_PROVIDER],
})
export class SharedModule {}
