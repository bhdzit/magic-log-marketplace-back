import { ROL_ENUM } from '@/enums/rol.enum';

export interface IUser {
  email: string;
  password: string;
  rol: ROL_ENUM;
}
