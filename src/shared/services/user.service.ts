import { IUserAccessor } from './user.accessor';
import { UserDTO } from '../dto/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService implements IUserAccessor {
  current: UserDTO;
}
