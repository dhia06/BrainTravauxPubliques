
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from 'src/Model/user.entity';



@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
 const roles = this.reflector.get<string[]>('roles', context.getHandler());
  console.log("user!!!!", User)
    if (!roles) {
      return true;
    }
}

}