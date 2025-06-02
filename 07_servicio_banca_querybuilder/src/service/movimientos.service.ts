import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimiento } from 'src/model/Movimiento';
import { Between, MoreThan, Repository } from 'typeorm';

@Injectable()
export class MovimientosService {
  
  constructor(@InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>){}

  findByCuenta(idCuenta: number):Promise<Movimiento[]> {
    return this.movimientosRepository.createQueryBuilder("movimiento")
    .innerJoinAndSelect("movimiento.cuenta", "c")
    .where("c.numeroCuenta=:numCuenta", {numCuenta:idCuenta})
    .getMany()
  }

  newMovimiento(movimiento:Movimiento):Promise<Movimiento>{
    return this.movimientosRepository.save(movimiento);
  }

  finByEntreFechas(fecha1:Date, fecha2:Date):Promise<Movimiento[]>{
    return this.movimientosRepository.createQueryBuilder("movimiento")
    .innerJoinAndSelect("movimiento.cuenta", "c")
    .where("movimiento.fecha between :f1 and :f2",{f1:fecha1,f2:fecha2})
    .getMany();
  }

  findMovimientosCuentasSaldoMin(saldoMin:number):Promise<Movimiento[]>{
    return this.movimientosRepository.createQueryBuilder("movimiento")
    .innerJoinAndSelect("movimiento.cuenta", "c")
    .where("c.saldo>:cant",{cant:saldoMin})
    .getMany();
  }

}

