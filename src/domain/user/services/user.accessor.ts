import { UserDto } from '../dto/user.dto';

export const USER_ACCESSOR = 'USER_ACCESSOR';

export interface IUserAccessor {
  current: UserDto;
}
