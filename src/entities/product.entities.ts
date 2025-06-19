import { IProduct } from '@/interfaces/product.interfaces';
import { Schema, model } from 'mongoose';

export const ProductsSchema = new Schema<IProduct>(
  {
    name: String,
    sku: String,
    img: String,
    price: Number,
    stock: Number,
  },
  { collection: 'Products', timestamps: true },
);

export const Products = model('Products', ProductsSchema);
