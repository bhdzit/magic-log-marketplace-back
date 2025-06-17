import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseService } from './conntection/mongoose';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [MongooseService],
})
export class AppModule {}
