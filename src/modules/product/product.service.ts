import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from '@/entities/product.entities';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) {
    return await Products.create(createProductDto);
  }

  async findAll({ limit }: { limit: number }) {
    const data = await Products.find().limit(limit);
    console.log({ limit });
    const itemsCount = await Products.countDocuments();
    return { data, itemsCount };
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    await Products.updateOne({ _id }, updateProductDto);
    return { message: 'Modelo actualizado correctamente' };
  }

  async remove(_id: string) {
    await Products.deleteOne({ _id });
    return { message: 'Modelo eliminado correctamente' };
  }
}
