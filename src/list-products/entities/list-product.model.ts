import { AbstractModel } from '@app/common/database/abstract.model';

export class ListProductModel extends AbstractModel {
    constructor() {
        super('products_lists', 'product_lists_pk');
    }
}
