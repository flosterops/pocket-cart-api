import { Module } from '@nestjs/common';
import { CacheModule as NestCache } from '@nestjs/cache-manager';

@Module({
    imports: [NestCache.register({ ttl: 3600, isGlobal: true })],
})
export class CacheModule {}
