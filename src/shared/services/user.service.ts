import { IUserAccessor } from './user.accessor';
import { UserDTO } from '../../auth/user.dto';

export class UserService implements IUserAccessor {
  current: UserDTO;
}
