import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasService } from './service/compras.service';
import { ComprasController } from './controller/compras.controller';

@Module({
  imports: [],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class AppModule {}