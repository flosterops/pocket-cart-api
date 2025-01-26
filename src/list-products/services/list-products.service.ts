import { Injectable } from '@nestjs/common';
import { ListProductsRepository } from '../repositories/list-products.repository';
import {
    IFindAllListProducts,
    IListProducts,
    IListWithProducts,
    IProduct,
} from '../interfaces/find-all-list-products.interface';

@Injectable()
export class ListProductsService {
    constructor(private readonly listProductsRepository: ListProductsRepository) {}

    // TODO: dermo
    async findAll() {
        const results: IFindAllListProducts[] = await this.listProductsRepository.findAllListsWithProducts();

        return results.reduce((acc: IListWithProducts[], item: IFindAllListProducts): IListWithProducts[] => {
            const hasId: boolean = acc.some((accItem: IListWithProducts): boolean => accItem.list_id === item.list_id);

            if (hasId) {
                return acc;
            }

            const productsOfItem: IFindAllListProducts[] = results.filter(
                (product: IFindAllListProducts): boolean => product.list_id === item.list_id,
            );

            acc.push({
                list_id: item.list_id,
                list_name: item.list_name,
                products: productsOfItem.map(
                    ({ product_id, product_name }: IFindAllListProducts): IProduct => ({
                        product_id,
                        product_name,
                    }),
                ),
            } as IListWithProducts);

            return acc;
        }, [] as IListWithProducts[]);
    }

    async findOne(id: number) {
        const results: IListProducts[] = await this.listProductsRepository.findListWithProducts(id);
        const entity: IListProducts = results[0];

        return {
            list_id: entity.list_id,
            list_name: entity.list_name,
            products: results.map(({ product_name, product_id }: IListProducts) => ({ product_name, product_id })),
        } as IListWithProducts;
    }

    assignProductToList(list_id: number, product_id: number) {
        return this.listProductsRepository.assignProductToList(list_id, product_id);
    }

    unassignProductFromList(list_id: number, product_id: number) {
        return this.listProductsRepository.unassignProductFromList(list_id, product_id);
    }
}
