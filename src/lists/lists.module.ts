import { Module } from '@nestjs/common';
import { ListsService } from './services/lists/lists.service';
import { ListsController } from './controllers/lists/lists.controller';
import { ListsRepository } from './repositories/lists.repository';
import { DatabaseModule } from '@app/common';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';
import { ProductsRepository } from './repositories/products.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [ListsController, ProductsController],
    providers: [ListsService, ListsRepository, ProductsService, ProductsRepository],
})
export class ListsModule {}
