import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoAltaDto } from 'src/dto/CursoAltaDto';
import { CursoResultadoDto } from 'src/dto/CursoResultadoDto';
import { Curso } from 'src/model/Curso';
import { Repository } from 'typeorm';

@Injectable()
export class CursosService {
    constructor(@InjectRepository(Curso) private cursosRepository:Repository<Curso>){}

    async getCursos():Promise<CursoResultadoDto[]>{
        return (await (await this.cursosRepository.find()) //Esto es un array de objeto Curso y nosotros queremos de CursoResultadoDto
        .map(c=> new CursoResultadoDto(c.idCurso, c.nombre,c.duracion, c.fechaInicio, c.precio)))
    }
    altaCurso(curso:CursoAltaDto):Promise<CursoResultadoDto>{
        return this.cursosRepository.save(curso);
    
    }
}
