import { IUserAccessor } from './user.accessor';
import { UserDto } from '../dto/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService implements IUserAccessor {
  current: UserDto;
}
