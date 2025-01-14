import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListsRepository } from './lists.repository';

@Injectable()
export class ListsService {
    constructor(private readonly listsRepository: ListsRepository) {}
    async create(createListDto: CreateListDto) {
        return await this.listsRepository.addOne(createListDto);
    }

    async findAll() {
        return await this.listsRepository.findAll();
    }

    async findOne(id: number) {
        return await this.listsRepository.findOne(id);
    }

    async update(id: number, updateListDto: UpdateListDto) {
        return await this.listsRepository.updateOne(id, updateListDto);
    }

    async remove(id: number) {
        return await this.listsRepository.deleteOne(id);
    }
}
