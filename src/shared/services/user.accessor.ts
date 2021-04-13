import { UserDTO } from '../../auth/user.dto';

export const USER_ACCESSOR = 'USER_ACCESSOR';

export interface UserAccessor {
  current: UserDTO;
}
