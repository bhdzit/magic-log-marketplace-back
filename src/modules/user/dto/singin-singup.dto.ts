/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IUser } from '@/interfaces/user.interfaces';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SinginSinguptDto implements Omit<IUser, 'rol'> {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
