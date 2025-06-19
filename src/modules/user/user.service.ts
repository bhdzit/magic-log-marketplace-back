/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/entities/user.entitie';
import { ERROR_ENUM } from '@/enums/messege.enum';
import { SinginSinguptDto } from './dto/singin-singup.dto';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}

  async create(createUserDto: SinginSinguptDto) {
    if ((await User.find({ email: createUserDto.email }).countDocuments()) > 0)
      throw new ConflictException(ERROR_ENUM.USER_EXIST);
    const hashedPassword: string = await bcrypt.hash(
      createUserDto.password,
      10,
    );
    createUserDto.password = hashedPassword;
    return await User.create(createUserDto);
  }

  async auth(payload: SinginSinguptDto) {
    const user = await User.findOne({ email: payload.email });

    if (user) {
      if (await bcrypt.compare(payload.password, user.password)) {
        const { _id, email, rol } = user;
        return {
          access_token: await this.jwtService.signAsync({ _id, email, rol }),
        };
      }
    }
    throw new UnauthorizedException();
  }
}
