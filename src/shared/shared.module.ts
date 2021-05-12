import { Module } from '@nestjs/common';
import { USER_ACCESSOR } from './services/user.accessor';
import { UserService } from './services/user.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration/configuration';

const userAccessorProvider = {
  provide: USER_ACCESSOR,
  useClass: UserService,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [userAccessorProvider],
  exports: [userAccessorProvider],
})
export class SharedModule {}
