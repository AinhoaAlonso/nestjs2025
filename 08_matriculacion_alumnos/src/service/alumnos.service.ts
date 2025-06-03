import { AlumnoResultadoDto } from './../dto/AlumnoResultadoDto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from 'src/model/Alumno';
import { Repository } from 'typeorm';


@Injectable()
export class AlumnosService {
  constructor(@InjectRepository(Alumno) private alumnosRepository:Repository<Alumno>){}

  async getAlumnosNoMatriculados(idCurso:number):Promise<Alumno[]>{
    const alumnosMatriculadosCurso:string[] = (await this.alumnosRepository.createQueryBuilder("alumno")
      .innerJoin("alumno.cursos", "cur")
      .where("cur.idCurso=:idCurso", {idCurso:idCurso})
      .getMany())//Hasta aqui tengo un array de alumnos que están en esa lista
      .map(alu => alu.usuario); //Aqui consigo el usuario

    //aqui comparamos que ids de alumnos NO estan en esa lista y nos lo guarda en un Array y es lo que sacamos
    return (await this.alumnosRepository.createQueryBuilder("alumno")
      //ponemos los ...para convertir ids en un array
      .where("alumno.usuario not in (:...ids)", { ids: alumnosMatriculadosCurso })
      .getMany())
      .map(a=>a.AlumnoResultadoDto(a.usuario, a.password, a.nombre, a.email, a.edad));
  }
}
