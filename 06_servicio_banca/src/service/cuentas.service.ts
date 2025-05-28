import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>,
    @InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>
  ){}


  async findCuentasMovimientosPorFecha(fecha1: Date): Promise<Cuenta[]> {
    const movimientos = await this.movimientosRepository.find({ 
      where: {
        fecha:fecha1
      },
      relations: ["cuenta"]
    })
     return movimientos.map(mov => mov.cuenta)
  }

   async findCuentasExtraccionesSaldo(cantidad: number): Promise<Cuenta[]> {
    const movimientos = await this.movimientosRepository.find({ 
      where: {
        cantidad: MoreThan(cantidad),
        operacion: "extracción"
      },
      relations: ["cuenta"]
    })
     return movimientos.map(mov => mov.cuenta)
  }

}
