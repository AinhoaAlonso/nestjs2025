import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MatriculacionService } from 'src/service/matriculacion.service';

@Controller('matriculacion')
export class MatriculacionController {
  constructor(private readonly matriculacionService: MatriculacionService) {}
  @Get('matriculas/:idCurso')
    mostrarAlumnosMatriculados(@Param("idCurso")idCurso:number){
    return this.matriculacionService.mostrarAlumnosMatriculados(idCurso);
  }
  @Get('cursos')
  mostrarDatosCursos(){
    return this.matriculacionService.mostrarDatosCursos();
  }

} 


