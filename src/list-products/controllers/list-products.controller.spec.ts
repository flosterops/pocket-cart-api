import { Test, TestingModule } from '@nestjs/testing';
import { ListProductsController } from './list-products.controller';
import { ListProductsService } from '../services/list-products.service';

describe('ListProductsController', () => {
    let controller: ListProductsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ListProductsController],
            providers: [ListProductsService],
        }).compile();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        controller = module.get<ListProductsController>(ListProductsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
