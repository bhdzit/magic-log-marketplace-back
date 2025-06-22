import { IUser } from './user.interfaces';

export interface IProduct {
  name: string;
  sku: string;
  price: number;
  stock: number;
  img: string;
  user?: IUser | undefined | string;
}
