import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUserAccessor, USER_ACCESSOR } from '../shared/services/user.accessor';

@Injectable()
export class UnifyGuard implements CanActivate {
  constructor(
    @Inject(USER_ACCESSOR)
    private readonly userAccessor: IUserAccessor,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.userAccessor.current = {
      id: '1',
      username: 'ioea-admin',
      email: 'ioea-admin@ioea.com',
      password: '123456',
      roles: ['admin'],
      claims: [],
    };
    return true;
  }
}
