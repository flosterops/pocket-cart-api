import { Injectable, Global } from '@nestjs/common';
import { Client } from 'pg';

// TODO: db class diagram
@Global()
@Injectable()
export class DatabaseProvider {
    constructor(readonly db: Client) {}

    async close() {
        await this.db.end();
    }
}
