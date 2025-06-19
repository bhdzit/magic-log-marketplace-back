import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseService } from './conntection/mongoose';
import { ProductsModule } from './modules/product/product.module';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductsModule, UsersModule],
  controllers: [],
  providers: [MongooseService],
})
export class AppModule {}
