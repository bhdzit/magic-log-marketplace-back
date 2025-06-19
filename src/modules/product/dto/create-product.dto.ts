import { IProduct } from '@/interfaces/product.interfaces';

export class CreateProductDto implements IProduct {
  name: string;
  sku: string;
  price: number;
  stock: number;
  img: string;
}
