import { Test, TestingModule } from '@nestjs/testing';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';

describe('ListsController', () => {
    let controller: ListsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ListsController],
            providers: [ListsService],
        }).compile();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        controller = module.get<ListsController>(ListsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
