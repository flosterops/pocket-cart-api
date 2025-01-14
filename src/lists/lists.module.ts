import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { ListsRepository } from './lists.repository';
import { DatabaseModule } from '@app/common';

@Module({
    imports: [DatabaseModule],
    controllers: [ListsController],
    providers: [ListsService, ListsRepository],
})
export class ListsModule {}
