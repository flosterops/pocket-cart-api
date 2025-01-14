import { List } from '../entities/list.entity';

export class CreateListDto implements Omit<List, 'list_id' | 'created_at'> {
    list_name: string;
}
