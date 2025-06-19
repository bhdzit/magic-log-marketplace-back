import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

import { IUser } from '@/interfaces/user.interfaces';
import { SUCCESS_ENUM } from '@/enums/messege.enum';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('singup')
  async create(@Body() createUserDto: IUser) {
    await this.userService.create(createUserDto);
    return {
      message: SUCCESS_ENUM.SINGUP_SUCCESS,
      statusCode: 201,
    };
  }

  @Post('login')
  auth(@Body() createUserDto: IUser) {
    return this.userService.auth(createUserDto);
  }
}
