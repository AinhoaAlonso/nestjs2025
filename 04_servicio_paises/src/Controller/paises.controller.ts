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

  findByContinente(){
    
  }

  findAllContinente(){

  }

  findPoblacionMax(){
    
  }
}
