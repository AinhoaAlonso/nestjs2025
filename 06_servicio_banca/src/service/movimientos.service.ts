import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimiento } from 'src/model/Movimiento';
import { Between, MoreThan, Repository } from 'typeorm';

@Injectable()
export class MovimientosService {
  
  constructor(@InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>){}

  findByCuenta(idCuenta: number):Promise<Movimiento[]> {
    return this.movimientosRepository.find(
      {where:{
        cuenta:{
          numeroCuenta:idCuenta
        }
      },
      relations: ["movimientos"]
    });
  }

  newMovimiento(movimiento:Movimiento):Promise<Movimiento>{
    return this.movimientosRepository.save(movimiento);
  }

  finByEntreFechas(fecha1:Date, fecha2:Date):Promise<Movimiento[]>{
    return this.movimientosRepository.find({ where: {fecha: Between(fecha1,fecha2)}});
  }

   findMovimientosCuentasSaldoMin(saldoMin:number):Promise<Movimiento[]>{
    return this.movimientosRepository.find({
      where:{
        cuenta:{
          saldo:MoreThan(saldoMin)
        }
      },
      relations:["cuenta"]
    });
  }

}

