import { UserDTO } from '../../auth/user.dto';

export const USER_ACCESSOR = 'USER_ACCESSOR';

export interface IUserAccessor {
  current: UserDTO;
}
