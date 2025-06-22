/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IProduct } from '@/interfaces/product.interfaces';
import { IUser } from '@/interfaces/user.interfaces';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto implements IProduct {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  sku: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  img: string;
  user?: IUser | undefined | string;
}
