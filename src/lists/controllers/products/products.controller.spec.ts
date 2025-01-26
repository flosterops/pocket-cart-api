import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from '../../services/products/products.service';

describe('ProductsController', () => {
    let controller: ProductsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [ProductsService],
        }).compile();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        controller = module.get<ProductsController>(ProductsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
