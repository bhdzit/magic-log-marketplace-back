import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseService } from './conntection/mongoose';
import { ProductsModule } from './modules/product/product.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductsModule],
  controllers: [],
  providers: [MongooseService],
})
export class AppModule {}
