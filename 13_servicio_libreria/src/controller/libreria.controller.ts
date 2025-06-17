import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ClientesService } from 'src/service/clientes.service';
import { LibrosService } from 'src/service/libros.service';
import { Response } from 'express';
import { ClienteDatosDto } from 'src/dtos/ClienteDatosDto';
import { LibroDatosDto } from 'src/dtos/LibroDatosDto';
import { ComprasService } from 'src/service/compras.service';
import { Request } from 'express';

@Controller('librerias')
export class LibreriaController {
  constructor(
    private readonly clientesService: ClientesService,
    private readonly comprasService: ComprasService,
    private readonly librosService: LibrosService
    
  ) {}

  @Post('autenticar')
  async auntenticar(@Body() cli:ClienteDatosDto, @Res() response:Response){
    const cliente:ClienteDatosDto = await this.clientesService.autenticar(cli.usuario, cli.password);
    if(cliente){
      //creamos una cookie
      response.cookie("user", cliente.usuario, {
        httpOnly: true,
        maxAge:24*60*60*1000,
        secure:false
      });
    }
    return response.json(cliente);
  }

  @Get('catalogo')
  catalogo():Promise<LibroDatosDto[]>{
    return this.librosService.catalogo();
  }

  @Get("compras")
  comprasUsuario(@Req() request:Request){
    const usuario:string = request.cookies["user"];
    if(usuario){
      return this.comprasService.ventasCliente(usuario);
    }
    return [];
  }
}
