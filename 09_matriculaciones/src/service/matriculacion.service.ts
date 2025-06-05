import { CursoDatosDto } from './../dtos/CursoDatosDto';
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
      .innerJoinAndSelect("matricula.curso", "cur")
      .innerJoinAndSelect("matricula.alumno", "alu")
      .where("cur.idCurso=:idCurso",{idCurso:idCurso})
      .getMany();
    return matriculas.map(m=>new MatriculaDatosDto(m.alumno.usuario, m.alumno.email,m.curso.nombre, m.nota))
  }
  //Para que solo me devuelva los datos del dto, lo tengo que transformar y hacer el mapeado con los dos campos que me interesan
  async mostrarDatosCursos():Promise<CursoDatosDto[]>{
    const cursos:Curso[]= await this.cursosRepository.find();
    return cursos.map(c=>new CursoDatosDto(c.idCurso, c.nombre));
  }
}
