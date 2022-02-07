import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUserAccessor, USER_ACCESSOR } from '../user/services/user.accessor';

@Injectable()
export class UnifyAuthGuard implements CanActivate {
  constructor(
    @Inject(USER_ACCESSOR)
    private readonly userAccessor: IUserAccessor,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // TODO: 实现身份认证
    console.log(context);
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
