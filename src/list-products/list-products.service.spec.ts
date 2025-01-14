import { Test, TestingModule } from '@nestjs/testing';
import { ListProductsService } from './list-products.service';

describe('ListProductsService', () => {
    let service: ListProductsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ListProductsService],
        }).compile();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        service = module.get<ListProductsService>(ListProductsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
