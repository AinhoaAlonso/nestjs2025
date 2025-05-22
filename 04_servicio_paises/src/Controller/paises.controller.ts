import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { PaisesService} from 'src/Service/paises.service';

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Get('paises-continente/:continente')
  findByContinente(@Param ("continente") continente:string){
    return this.paisesService.findByContinente(continente);
  }
  @Get('continentes')
  findAllContinente(){
    return this.paisesService.findAllContinente();
  }
  @Get('pais-max-poblacion')
  findPoblacionMax(){
    return this.paisesService.findPoblacionMax();
  }
}
