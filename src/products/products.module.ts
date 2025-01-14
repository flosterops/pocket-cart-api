import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { DatabaseModule } from '@app/common';

@Module({
    imports: [DatabaseModule],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
