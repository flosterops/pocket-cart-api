import { AbstractEntity } from '@app/common/database/abstract.entity';

export class Product extends AbstractEntity {
    product_id: number;
    product_name: string;
}
