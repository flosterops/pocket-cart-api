import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { ListsService } from '../../services/lists/lists.service';
import { CreateListDto } from '../../dto/list/create-list.dto';
import { UpdateListDto } from '../../dto/list/update-list.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('lists')
export class ListsController {
    constructor(private readonly listsService: ListsService) {}

    @Post()
    create(@Body() createListDto: CreateListDto) {
        return this.listsService.create(createListDto);
    }

    @Get()
    @UseInterceptors(CacheInterceptor)
    findAll() {
        return this.listsService.findAll();
    }

    @Get(':id')
    @UseInterceptors(CacheInterceptor)
    findOne(@Param('id') id: string) {
        return this.listsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
        return this.listsService.update(+id, updateListDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.listsService.remove(+id);
    }
}
