import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CACHE_EXPIRATION_TIME } from '@app/common/constants';

@Injectable()
export class CacheControlInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const response = context.switchToHttp().getResponse();

        response.setHeader('Cache-Control', `public, max-age=${CACHE_EXPIRATION_TIME}`);

        return next.handle();
    }
}
