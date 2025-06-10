import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { PedidoAltaDto } from 'src/dtos/PedidoAltaDto';
import { ComprasService } from 'src/service/compras.service';
import { Response } from 'express';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Get('productosRangoPrecio')
  productosPorRangoPrecio(@Query('precioMin') precioMin: number, @Query('precioMax') precioMax:number){
    return this.comprasService.productosPorRangoPrecio(precioMin, precioMax);
  }

  @Post('nuevoPedido')
  async nuevoPedido(@Body() pedido:PedidoAltaDto, @Res() response:Response){
    const resultado:boolean = await this.comprasService.nuevoPedido(pedido);
    if(resultado){
      response.status(200).send()
    } else{
      response.status(409).send()
    }
  }
}
