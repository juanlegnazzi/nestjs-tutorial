import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Items, ItemsDocument } from './schema/items.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  //Injectamos el modelo de items y se lo estamos asignando a la propiedad itemsModule
  constructor(
    @InjectModel(Items.name) private itemsModule:Model<ItemsDocument>
    ) {}

  async create(createItemDto: CreateItemDto) {
    //TODO DTO createItemDto --> BODY esto trae la data
    const itemsCreated = await this.itemsModule.create(createItemDto)
    return itemsCreated;
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
