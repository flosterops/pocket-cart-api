import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
    CacheModule,
    ConfigModule,
    DatabaseModule,
    LoggerModule,
} from '@app/common';
import { ListsModule } from './lists/lists.module';
import { ListProductsModule } from './list-products/list-products.module';

@Module({
    imports: [
        CacheModule,
        LoggerModule,
        DatabaseModule,
        ConfigModule,
        ListsModule,
        ListProductsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
