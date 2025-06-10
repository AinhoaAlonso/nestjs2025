import { Response } from 'express';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PedidoAltaDto } from 'src/dtos/PedidoAltaDto';
import { ProductoDto } from 'src/dtos/ProductoDto';

@Injectable()
export class ComprasService {
  urlGlobal:string = "http://localhost:3000/tienda";

  async productosPorRangoPrecio(precioMin:number, precioMax:number):Promise<ProductoDto[]>{
    const response = await axios.get(`${this.urlGlobal}/catalogoProductos`);
    const data: any = response.data;
    const productos: any = data.filter((p) => p.precioUnitario >= precioMin && p.precioUnitario <= precioMax)
      .map((p) => {
        let disponibilidad: string;
        if (p.stock > 0 && p.stock <= 3) {
          disponibilidad = "Bajo";
        } else if (p.stock >= 4 && p.stock <= 10) {
          disponibilidad = "Media";
        } else {
          disponibilidad = "Alta";
        }
        return new ProductoDto(p.producto, p.precioUnitario, disponibilidad);
      });
    return productos;
  }

  async nuevoPedido(pedido:PedidoAltaDto): Promise<boolean>{
    const response = await axios.post(`${this.urlGlobal}/altaPedido`, pedido);
    if (response.status == 200){
      return true;
    }else{
      return false;
    }
  }
}
