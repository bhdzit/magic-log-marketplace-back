import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from '@/entities/product.entities';
import { User } from '@/entities/user.entitie';
import mongoose from 'mongoose';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) {
    return await Products.create(createProductDto);
  }

  async findAll({
    limit,
    name = '',
    sku = '',
    user = '',
  }: {
    limit: number;
    name?: string;
    sku?: string;
    user?: string;
  }) {
    let userQuery = {};
    if (user.length) {
      const seller = await User.findOne({
        email: { $regex: user, $options: 'i' },
      });
      if (seller) {
        userQuery = { user: new mongoose.Types.ObjectId(seller._id) };
      } else return { data: [], itemsCount: 0 };
    }
    const data = await Products.find({
      name: { $regex: name, $options: 'i' },
      sku: { $regex: sku, $options: 'i' },
      ...userQuery,
    })
      .populate('user')
      .limit(limit);
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
