import { Product } from '../entities/product.entity';

export class CreateProductDto implements Omit<Product, 'product_id' | 'created_at'> {
    product_name: string;
}
