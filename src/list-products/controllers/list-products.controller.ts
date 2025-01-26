import { Controller, Get, Post, Body, Param, UseInterceptors } from '@nestjs/common';
import { ListProductsService } from '../services/list-products.service';
import { AssignProductToListDto, UnAssignProductFromListDto } from '../dto/assign-product-to-list.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('lists-products')
export class ListProductsController {
    constructor(private readonly listProductsService: ListProductsService) {}

    @Get()
    @UseInterceptors(CacheInterceptor)
    findAll() {
        return this.listProductsService.findAll();
    }

    @Get(':list_id/products')
    @UseInterceptors(CacheInterceptor)
    findOne(@Param('list_id') list_id: string) {
        return this.listProductsService.findOne(+list_id);
    }

    @Post(':list_id/assign-product')
    create(@Param('list_id') list_id: string, @Body() assignProductToListDto: AssignProductToListDto) {
        return this.listProductsService.assignProductToList(+list_id, assignProductToListDto.product_id);
    }

    @Post(':list_id/unassign-product')
    remove(@Param('list_id') list_id: string, @Body() unAssignProductFromListDto: UnAssignProductFromListDto) {
        return this.listProductsService.unassignProductFromList(+list_id, unAssignProductFromListDto.product_id);
    }
}
