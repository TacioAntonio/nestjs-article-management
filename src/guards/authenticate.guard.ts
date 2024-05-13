import { Injectable } from '@nestjs/common';
import { BaseAuthenticationGuard } from './baseAuthentication.guard';

@Injectable()
export class AuthenticateGuard extends BaseAuthenticationGuard {}
