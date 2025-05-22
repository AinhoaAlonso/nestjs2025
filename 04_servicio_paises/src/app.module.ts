import { Module } from '@nestjs/common';
import { PaisesController } from './Controller/paises.controller';
import { PaisesService } from './Service/paises.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class AppModule {}
