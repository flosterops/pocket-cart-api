import { PartialType } from '@nestjs/mapped-types';
import { CreateListProductDto } from './create-list-product.dto';

export class UpdateListProductDto extends PartialType(CreateListProductDto) {}
