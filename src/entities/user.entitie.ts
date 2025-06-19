import { ROL_ENUM } from '@/enums/rol.enum';
import { IUser } from '@/interfaces/user.interfaces';
import { Schema, model } from 'mongoose';

export const UsersSchema = new Schema<IUser>(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    rol: {
      enum: [ROL_ENUM.SELLER],
      type: Number,
      default: ROL_ENUM.SELLER,
    },
  },
  { collection: 'Users', timestamps: true },
);

export const User = model('Users', UsersSchema);
