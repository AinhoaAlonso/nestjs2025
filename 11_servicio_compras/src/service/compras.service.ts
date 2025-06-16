import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import { PedidoAltaDto } from 'src/dtos/PedidoAltaDto';
import { ProductoDto } from 'src/dtos/ProductoDto';



@Injectable()
export class ComprasService implements OnModuleInit{
  token:string;
  username:string = "usuario1";
  password:string = "usuario1";
  urlGlobal:string = "http://localhost:4000/tienda";
  urlAutenticacion:string ="http://localhost:4000/auth/login";

  constructor(){}
  //nos conectamos con el recurso de login para traernos el access_token
  async onModuleInit() {
    //obtenemos el token al principio
    const response = await axios.post(this.urlAutenticacion,{username:this.username, password:this.password});
    this.token = response.data.access_token;
    console.log("Access Token", this.token);
  }

  async productosPorRangoPrecio(precioMin:number, precioMax:number):Promise<ProductoDto[]>{
    const response = await axios.get(`${this.urlGlobal}/catalogoProductos`, {headers:{Authorization:`Bearer ${this.token}`}});
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
    const head = { "Authorization": `Bearer ${this.token}` };
    const response = await axios.post(`${this.urlGlobal}/altaPedido`, pedido, {headers:{Authorization:`Bearer ${this.token}`}});
    if (response.status == 200){
      return true;
    }else{
      return false;
    }
  }
}
