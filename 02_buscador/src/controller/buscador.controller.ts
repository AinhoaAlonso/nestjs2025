import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { Item } from 'src/model/Item';
import { BuscadorService } from 'src/service/buscador.service';

@Controller('buscador')
export class BuscadorController {
  constructor(private readonly buscadorService: BuscadorService) {}

  @Get('buscar/:tematica')
  buscar(tematica:string): Item[]{
    return this.buscadorService.buscar(tematica);
  }
  @Post('alta')
  alta(@Body() item:Item):void{
    return this.buscadorService.alta(item);
  }
  
}
