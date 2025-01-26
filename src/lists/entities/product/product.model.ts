import { AbstractModel } from '@app/common/database/abstract.model';

export class ProductModel extends AbstractModel {
    constructor() {
        super('products', 'product_id');
    }
}
