import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CuentasService } from 'src/service/cuentas.service';
import { Response } from 'express';
import { Cuenta } from 'src/model/Cuenta';

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

  @Get('titulares/:dni')
  async findCuentasPorTitular(@Param('dni') dni:number, @Res() response:Response){
    console.log("Dni", dni);
    const cuentas: Cuenta[]= await this.cuentasService.findCuentasPorTitular(dni);
    if(cuentas.length>0){
      response.status(200).json(cuentas);
    }else{
      response.status(409).json([]);
    }
  }

  @Post('altacuenta')
  altaCuenta(@Body() datos:any){
    const cuenta: Cuenta = datos.cuenta;
    const dnis: number[] = datos.dnis;
    this.cuentasService.altaCuenta(cuenta,dnis);
  }
  @Get('saldoMedio')
  saldoMedio(){
    return this.cuentasService.saldoMedio();
  }
}
