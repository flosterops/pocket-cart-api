import { AbstractRepository } from '@app/common/database/abstract.repository';
import { List } from './entities/list.entity';
import { Injectable, Logger } from '@nestjs/common';
import { DatabaseProvider } from '@app/common/database/database.provider';
import { ListModel } from './entities/list.model';

@Injectable()
export class ListsRepository extends AbstractRepository<List> {
    protected readonly logger: Logger;
    constructor(private readonly databaseProvider: DatabaseProvider) {
        super(databaseProvider.db, new ListModel());
    }
}
