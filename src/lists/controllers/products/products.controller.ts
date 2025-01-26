import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { UpdateProductDto } from '../../dto/product/update-product.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Get()
    @UseInterceptors(CacheInterceptor)
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    @UseInterceptors(CacheInterceptor)
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
