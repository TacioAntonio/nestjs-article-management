import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { BaseAuthenticationGuard } from './baseAuthentication.guard';

@Injectable()
export class AdminAuthorizationGuard extends BaseAuthenticationGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (!(await super.canActivate(context))) {
      return false;
    }

    const request = context.switchToHttp().getRequest();
    if (!request.user.isAdmin) throw new UnauthorizedException();

    return true;
  }
}
