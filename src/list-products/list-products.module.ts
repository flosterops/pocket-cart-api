import { Module } from '@nestjs/common';
import { ListProductsService } from './list-products.service';
import { ListProductsController } from './list-products.controller';
import { DatabaseModule } from '@app/common';
import { ListProductsRepository } from './list-products.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [ListProductsController],
    providers: [ListProductsService, ListProductsRepository],
})
export class ListProductsModule {}
