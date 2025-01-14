import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(private productsRepository: ProductsRepository) {}

    async create(createProductDto: CreateProductDto) {
        return await this.productsRepository.addOne(createProductDto);
    }

    async findAll() {
        return await this.productsRepository.findAll();
    }

    async findOne(id: number) {
        return await this.productsRepository.findOne(id);
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        return await this.productsRepository.updateOne(id, updateProductDto);
    }

    async remove(id: number) {
        return await this.productsRepository.deleteOne(id);
    }
}
