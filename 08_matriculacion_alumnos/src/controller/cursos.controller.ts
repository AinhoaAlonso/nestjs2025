import { AlumnosService } from './../service/alumnos.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CursosService } from 'src/service/cursos.service';
import { MatriculasService } from 'src/service/matriculas.service';
import { Response } from 'express';
import { MatriculaNuevaDto } from 'src/dto/MatriculaNuevaDto';

@Controller('cursos')
export class CursosController {
  constructor(
    private readonly cursosService: CursosService,
    private readonly alumnosService:AlumnosService,
    private readonly matriculasService: MatriculasService
  ) {}

  @Get('todos')
  getCursos(){
    return this.cursosService.getCursos();
  }

  @Get('alumnosNoMatriculados/:id')
  getAlumnosNoMatriculados(@Param("id") idCurso:number){
    return this.alumnosService.getAlumnosNoMatriculados(idCurso);
  }

  /*@Post('matricular/:usuario/:idCurso')
  async matricular(@Param("usuario") usuario:string, @Param("idCurso") idCurso:number, @Res() response:Response){
    const resultado:boolean = await this.matriculasService.matricular(usuario,idCurso);

    if(response){
      response.status(200).send()
    } else{
      response.status(400).send()
    }
  }*/
  
  @Post('matricular')
  async matricular(@Body() datos: MatriculaNuevaDto, @Res() response:Response){
    const resultado:boolean = await this.matriculasService.matricular(datos);

    if(response){
      response.status(200).send()
    } else{
      response.status(400).send()
    }
  }
}
