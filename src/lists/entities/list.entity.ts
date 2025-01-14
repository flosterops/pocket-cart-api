import { AbstractEntity } from '@app/common/database/abstract.entity';

export class List extends AbstractEntity {
    list_id: number;
    list_name: string;
}
