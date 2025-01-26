import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';
import { DatabaseProvider } from '@app/common/database/database.provider';
import { ListProductModel } from './entities/list-product.model';
import { ListProduct } from './entities/list-product.entity';
import { IFindAllListProducts, IListProducts } from './interfaces/find-all-list-products.interface';

// TODO: repository pattern
@Injectable()
export class ListProductsRepository extends AbstractRepository<ListProduct> {
    protected readonly logger: Logger;

    constructor(private readonly databaseProvider: DatabaseProvider) {
        super(databaseProvider.db, new ListProductModel());
    }

    async assignProductToList(listId: number, productId: number) {
        try {
            const query = `INSERT INTO products_lists (list_id, product_id) VALUES ($1, $2) RETURNING *`;

            const results = await this.query(query, [listId, productId]);

            return results;
        } catch (error) {
            throw error;
        }
    }

    async unassignProductFromList(listId: number, productId: number) {
        try {
            const query = `DELETE FROM products_lists WHERE list_id = $1 AND product_id = $2 RETURNING *`;

            const results = await this.query(query, [listId, productId]);

            return results;
        } catch (error) {
            throw error;
        }
    }

    async findAllListsWithProducts() {
        try {
            const query = `SELECT
               l.list_name,
               l.list_id,
               p.product_id,
               p.product_name,
               pl.created_at
            FROM
                 products_lists pl
            JOIN 
                lists l ON pl.list_id = l.list_id
            JOIN
                products p ON pl.product_id = p.product_id
            GROUP BY
                l.list_id, p.product_id, pl.created_at
            ORDER BY
                l.list_id`;

            const results: IFindAllListProducts[] = await this.query<IFindAllListProducts>(query);

            return results;
        } catch (error) {
            throw error;
        }
    }

    async findListWithProducts(id: number) {
        try {
            const query = `SELECT
                l.list_id as list_id,
                l.list_name AS list_name,
                p.product_name AS product_name,
                p.product_id AS product_id 
            FROM
                lists l
            JOIN
                products_lists pl
            ON
               l.list_id = pl.list_id
            JOIN
                products p
            ON
                p.product_id = pl.product_id
            WHERE
                l.list_id = $1
            ORDER BY
                p.product_name;`;

            const results: IListProducts[] = await this.query(query, [id]);

            return results;
        } catch (error) {
            throw error;
        }
    }
}
