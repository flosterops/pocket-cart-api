import { Logger } from '@nestjs/common';
import { AbstractEntity } from '@app/common/database/abstract.entity';
import { Client, QueryResult } from 'pg';

// TODO: DB not working properly
// TODO: any DB import
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export abstract class AbstractDb<Entity extends AbstractEntity, DB = Client> {
    protected abstract readonly logger: Logger;

    protected constructor(protected readonly db: Client) {}

    async query<T = Entity>(query: string, params?: any[]): Promise<T[]> {
        try {
            const result: QueryResult<T> = await this.db.query(query, params);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }
}
