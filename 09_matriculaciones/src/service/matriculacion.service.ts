import { Repository } from 'typeorm';
import { Matricula } from './../model/Matricula';
import { Injectable } from '@nestjs/common';
import { Curso } from 'src/model/Curso';
import { Alumno } from 'src/model/Alumno';
import { InjectRepository } from '@nestjs/typeorm';
import { MatriculaDatosDto } from 'src/dtos/MatriculaDatosDto';

@Injectable()
export class MatriculacionService {
  constructor(
    @InjectRepository(Curso) private cursosRepository:Repository<Curso>,
    @InjectRepository(Alumno) private alumnosRepository:Repository<Alumno>,
    @InjectRepository(Matricula) private matriculasRepository:Repository<Matricula>
  ){}

  async mostrarAlumnosMatriculados(idCurso:number):Promise<MatriculaDatosDto[]>{
    const matriculas: Matricula[]= await this.matriculasRepository.createQueryBuilder('matricula')
      .innerJoin("matricula.curso", "cur")
      .innerJoin("matricula.alumno", "alu")
      .where("cur.idCurso=:idCurso",{idCurso:idCurso})
      .getMany();
    return matriculas.map(m=>new MatriculaDatosDto(m.usuario.usuario, m.usuario.email,m.idCurso.nombre, m.nota))
  }
}
