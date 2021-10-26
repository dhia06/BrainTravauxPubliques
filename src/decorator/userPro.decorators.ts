import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Decorateur récupérable via @User
export const UserPro = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      console.log("see request:",request)
      console.log("userprorequest",request.user);
      return request.user;
    },
  );
