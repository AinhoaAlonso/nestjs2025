import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from 'src/model/Alumno';
import { Repository } from 'typeorm';


@Injectable()
export class AlumnosService {
  constructor(@InjectRepository(Alumno) private alumnosRepository:Repository<Alumno>){}

  getAlumnosNoMatriculados(curso:number):Promise<Alumno[]>{
    const alumnosMatriculadosCurso = this.alumnosRepository.createQueryBuilder("alumno")

  }
}
