import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompraClienteDto } from 'src/dtos/CompraClienteDto';
import { Venta } from 'src/entities/Venta';
import { Repository } from 'typeorm';

@Injectable()
export class ComprasService {
  constructor(@InjectRepository(Venta) private ventasRepository:Repository<Venta>){}
  
    async ventasCliente(usuario:string):Promise<CompraClienteDto[]>{
      const ventas:Venta[] = await this.ventasRepository.createQueryBuilder('ventas')
      .innerJoinAndSelect("ventas.cliente", "c")
      .innerJoinAndSelect("ventas.libro", "l")
      .where("c.usuario=:us", {us:usuario})
      .getMany()
      return ventas.map(ve=> new CompraClienteDto(ve.cliente.usuario, ve.libro.titulo, ve.fecha));
    }
}
