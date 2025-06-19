import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { SUCCESS_ENUM } from '@/enums/messege.enum';
import { SinginSinguptDto } from './dto/singin-singup.dto';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('singup')
  async create(@Body() createUserDto: SinginSinguptDto) {
    await this.userService.create(createUserDto);
    return {
      message: SUCCESS_ENUM.SINGUP_SUCCESS,
      statusCode: 201,
    };
  }

  @Post('login')
  auth(@Body() createUserDto: SinginSinguptDto) {
    return this.userService.auth(createUserDto);
  }
}
