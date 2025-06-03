import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatriculaNuevaDto } from 'src/dto/MatriculaNuevaDto';
import { Alumno } from 'src/model/Alumno';
import { Curso } from 'src/model/Curso';
import { In, Repository } from 'typeorm';

@Injectable()
export class MatriculasService {

  constructor(
    @InjectRepository(Curso) private cursosRepository:Repository<Curso>,
    @InjectRepository(Alumno) private alumnosRepository:Repository<Alumno>
  ){}

  async matricular(matricula:MatriculaNuevaDto):Promise<boolean>{
    const alumno:Alumno= await this.alumnosRepository.createQueryBuilder("alumno")
      .where("alumno.usuario=:usuario", {usuario:matricula.usuario})
      .getOne();
    const curso:Curso = await this.cursosRepository.createQueryBuilder("curso")
      //si quiero que me traiga los alumnos del curso
      .innerJoinAndSelect("curso.alumnos", "alum")
      .where("curso.idCurso=:idCurso", {idCurso:matricula.idCurso})
      .getOne();
    
    if(!alumno || !curso){
      return false;
    }
    //añadimos el alumno al curso y actualizamos el curso, esto realmente actualiza la lista de cursos pero como está lo actualiza(no lo duplica)
    curso.alumnos.push(alumno);
    await this.cursosRepository.save(curso);
    return true;
  }
}