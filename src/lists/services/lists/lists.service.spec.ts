import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';

describe('ListsService', () => {
    let service: ListsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ListsService],
        }).compile();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        service = module.get<ListsService>(ListsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
