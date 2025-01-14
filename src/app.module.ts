import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, DatabaseModule, LoggerModule } from '@app/common';
import { ListsModule } from './lists/lists.module';
import { ListProductsModule } from './list-products/list-products.module';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        LoggerModule,
        DatabaseModule,
        ConfigModule,
        ListsModule,
        ProductsModule,
        ListProductsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
