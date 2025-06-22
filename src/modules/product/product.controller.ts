import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@/auth/auth.guard';
import { User } from '@/decorator/user.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @User() user: { _id: string },
    @Body() createProductDto: CreateProductDto,
  ) {
    createProductDto.user = user._id;
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(
    @Query('limit') limit: number = 10,
    @Query('name') name: string,
    @Query('sku') sku: string,
    @Query('user') user: string,
  ) {
    const { itemsCount, data } = await this.productsService.findAll({
      limit,
      name,
      sku,
      user,
    });
    return {
      data,
      itemsCount,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
