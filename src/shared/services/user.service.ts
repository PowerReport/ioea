import { UserAccessor } from './user.accessor';
import { UserDTO } from '../../auth/user.dto';

export class UserService implements UserAccessor {
  current: UserDTO;
}
