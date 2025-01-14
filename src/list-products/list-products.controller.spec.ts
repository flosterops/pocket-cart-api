import { Test, TestingModule } from '@nestjs/testing';
import { ListProductsController } from './list-products.controller';
import { ListProductsService } from './list-products.service';

describe('ListProductsController', () => {
    let controller: ListProductsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ListProductsController],
            providers: [ListProductsService],
        }).compile();

        controller = module.get<ListProductsController>(ListProductsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
