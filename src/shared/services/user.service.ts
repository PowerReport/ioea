import { IUserAccessor } from './user.accessor';
import { UserDTO } from '../dto/user.dto';

export class UserService implements IUserAccessor {
  current: UserDTO;
}
