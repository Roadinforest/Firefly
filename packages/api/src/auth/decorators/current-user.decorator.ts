import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDto } from '../dto';
import { Request } from 'express';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserDto => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user as UserDto;
  },
); 