import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ProductosService } from 'src/service/productos.service';
import { PedidosService } from 'src/service/pedidos.service';
import { ProductoDto } from 'src/dtos/ProductoDto';
import { Response } from 'express';
import { PedidoAltaDto } from 'src/dtos/PedidoAltaDto';

@Controller('tienda')
export class PedidosProductosController {
  constructor(
    private readonly pedidosService: PedidosService,
    private readonly productosService: ProductosService
  ) {}

  //Alta pedidos y productos
  //catálogo de productos y listado de pedidos
  @Get('catalogoProductos')
  catalogoProductos(){
    return this.productosService.catalogo();
  }

  @Get('catalogoPedidos')
  catalogoPedidos(){
    return this.pedidosService.catalogoPedidos();
  }

  @Post('altaProducto')
  async altaProducto(@Body() producto: ProductoDto, @Res() response:Response){
    const resultado:boolean = await this.productosService.alta(producto);

    if(resultado){
      response.status(200).send()
    } else{
      response.status(409).send()
    }
  }

  @Post('altaPedido')
  async altaPedido(@Body() pedido:PedidoAltaDto, @Res() response:Response){
    const resultado:boolean = await this.pedidosService.altaPedido(pedido);
    if(resultado){
      response.status(200).send()
    } else{
      response.status(409).send()
    }
  }
}
