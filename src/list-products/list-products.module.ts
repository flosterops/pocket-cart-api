import { Module } from '@nestjs/common';
import { ListProductsService } from './services/list-products.service';
import { ListProductsController } from './controllers/list-products.controller';
import { DatabaseModule } from '@app/common';
import { ListProductsRepository } from './repositories/list-products.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [ListProductsController],
    providers: [ListProductsService, ListProductsRepository],
})
export class ListProductsModule {}
