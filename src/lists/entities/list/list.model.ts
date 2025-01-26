import { AbstractModel } from '@app/common/database/abstract.model';

export class ListModel extends AbstractModel {
    constructor() {
        super('lists', 'list_id');
    }
}
