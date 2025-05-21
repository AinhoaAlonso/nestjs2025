import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { BancoService } from 'src/service/banco.service';
import { Cuenta } from 'src/model/Cuenta';
import { Response } from 'express';

@Controller('banco')
export class BancoController {

  constructor(private readonly bancoService: BancoService) {}

  @Get('saldo_minimo/:saldo')
  getCuentaSaldoMinimo(@Param("saldo") saldo:number):Cuenta[]{
    return this.bancoService.getCuentaSaldoMinimo(saldo);
  }
  @Get('numero_cuenta/:cuenta')
  getCuentaPorNumeroCuenta(@Param("cuenta") numeroCuenta:string, @Res() response:Response):any{
    const cuenta:Cuenta= this.bancoService.getCuentaPorNumeroCuenta(numeroCuenta);
    if(cuenta){
      return response.status(200).json(cuenta);
    }else{
      return response.status(419).json(new Cuenta());
    }
  }
  @Get('tipo/:tipo')
  getCuentaPorTipo(@Param("tipo") tipo:string): Cuenta[]{
    return this.bancoService.getCuentaPorTipo(tipo);
  }
  @Post('guardar')
  saveCuenta(@Body() cuenta:Cuenta, @Res() response: Response):void{
    const resultado:boolean = this.bancoService.saveCuenta(cuenta);
    if(resultado){
      //si todo ha ido bien (true) devolvemos codigo 200 y el .send para enviar la respuesta
      response.status(200).send();
    } else{
      //si es false devuelve codigo 409
      response.status(409).send();
    }
  }
  @Delete('eliminar')
  deleteByNumber(@Query("numeroCuenta") numeroCuenta:string):void{
    this.bancoService.deleteByNumber(numeroCuenta);
  }
}
