import { Module } from '@nestjs/common';
import { PaisesController } from './Controller/paises.controller';
import { PaisesService } from './Service/paises.service';



@Module({
  imports: [],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class AppModule {}
