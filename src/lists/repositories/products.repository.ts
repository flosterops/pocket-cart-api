import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Product } from '../entities/product/product.entity';
import { ProductModel } from '../entities/product/product.model';
import { DatabaseProvider } from '@app/common/database/database.provider';

@Injectable()
export class ProductsRepository extends AbstractRepository<Product> {
    protected readonly logger = new Logger('products');

    //TODO: Inject model
    constructor(private readonly databaseProvider: DatabaseProvider) {
        super(databaseProvider.db, new ProductModel());
    }
}
