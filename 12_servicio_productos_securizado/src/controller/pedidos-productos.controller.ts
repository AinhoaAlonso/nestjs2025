import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ProductosService } from 'src/service/productos.service';
import { PedidosService } from 'src/service/pedidos.service';
import { ProductoDto } from 'src/dtos/ProductoDto';
import { Response } from 'express';
import { PedidoAltaDto } from 'src/dtos/PedidoAltaDto';
import { Roles } from 'src/security/roles.decorator';
import { JwtAuthGuard } from 'src/security/jwt-auth.guard';
import { RolesGuard } from 'src/security/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)

@Controller('tienda')
export class PedidosProductosController {
  constructor(
    private readonly pedidosService: PedidosService,
    private readonly productosService: ProductosService
  ) {}

  //Alta pedidos y productos
  //catálogo de productos y listado de pedidos
  @Roles("admin", "user")
  @Get('catalogoProductos')
  catalogoProductos(){
    return this.productosService.catalogo();
  }
  @Roles("admin")
  @Get('catalogoPedidos')
  catalogoPedidos(){
    return this.pedidosService.catalogoPedidos();
  }
  @Roles("admin")
  @Post('altaProducto')
  async altaProducto(@Body() producto: ProductoDto, @Res() response:Response){
    const resultado:boolean = await this.productosService.alta(producto);

    if(resultado){
      response.status(200).send()
    } else{
      response.status(409).send()
    }
  }
  @Roles("user")
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
