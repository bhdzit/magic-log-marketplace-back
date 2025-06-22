import { IProduct } from '@/interfaces/product.interfaces';
import mongoose, { Schema, model } from 'mongoose';

export const ProductsSchema = new Schema<IProduct>(
  {
    name: String,
    sku: String,
    img: String,
    price: Number,
    stock: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  { collection: 'Products', timestamps: true },
);

export const Products = model('Products', ProductsSchema);
