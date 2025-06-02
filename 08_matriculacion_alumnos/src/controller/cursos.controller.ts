import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CursosService } from 'src/service/cursos.service';
import { Curso } from 'src/model/Curso';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get('todos')
  getCursos(){
    return this.cursosService.getCursos();
  }
  
}
