import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimiento } from 'src/model/Movimiento';
import { Between, Repository } from 'typeorm';

@Injectable()
export class MovimientosService {
  
  constructor(@InjectRepository(Movimiento) private contactosRepository:Repository<Movimiento>){}

  findByCuenta(idCuenta: number):Promise<Movimiento[]> {
    return this.contactosRepository.findBy({idCuenta:idCuenta});
  }

  newMovimiento(movimiento:Movimiento):Promise<Movimiento>{
    return this.contactosRepository.save(movimiento);
  }

  finByEntreFechas(fecha1:Date, fecha2:Date):Promise<Movimiento[]>{
    return this.contactosRepository.find({ where: {fecha: Between(fecha1,fecha2)}});
  }
}
