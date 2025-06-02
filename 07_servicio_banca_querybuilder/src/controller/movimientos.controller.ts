import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { MovimientosService } from 'src/service/movimientos.service';
import { Movimiento } from 'src/model/Movimiento';

@Controller('movimientos')
export class MovimientosController {

  constructor(private readonly movimientosService: MovimientosService) {}

  @Get('buscar/:idCuenta')
  findByCuenta(@Param('idCuenta') idCuenta: number) {
    return this.movimientosService.findByCuenta(idCuenta);
  }

  @Post('alta')
  newMovimiento(@Body() movimiento: Movimiento){
    this.movimientosService.newMovimiento(movimiento);
  }

  @Get("fechas")
  finByEntreFechas(@Query("fecha1") fecha1:Date, @Query("fecha2") fecha2:Date){
    console.log("Fecha1", fecha1);
    console.log("Fecha2", fecha2);
    return this.movimientosService.finByEntreFechas(fecha1,fecha2)
  }
  @Get('cuentas/:saldoMin')
  findMovimientosCuentasSaldoMin(@Param('saldoMin') saldo: number){
    return this.movimientosService.findMovimientosCuentasSaldoMin(saldo);
  }
}
 