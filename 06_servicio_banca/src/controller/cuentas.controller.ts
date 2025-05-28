import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { CuentasService } from 'src/service/cuentas.service';


@Controller('cuentas')
export class CuentasController {

  constructor(private readonly cuentasService: CuentasService) {}

  @Get('movimientos/:fecha')
  findCuentasMovimientosPorFecha(@Param("fecha") fecha: Date){
    console.log("Fecha", fecha)
    return this.cuentasService.findCuentasMovimientosPorFecha(fecha)
  }

  @Get('extraccion/:cantidad')
  findCuentasExtraccionesSaldoSuperior(@Param('cantidad') cantidad:number){
    console.log("Cantidades superiores a ", cantidad);
    return this.cuentasService.findCuentasExtraccionesSaldo(cantidad)
  }
}
