import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoResultadoDto } from 'src/dto/CursoResultadoDto';
import { Curso } from 'src/model/Curso';
import { Repository } from 'typeorm';

@Injectable()
export class CursosService {
    constructor(@InjectRepository(Curso) private cursosRepository:Repository<Curso>){}

    async getCursos():Promise<CursoResultadoDto[]>{
        return (await (await this.cursosRepository.find()) //Esto es un array de Curso
        .map(c=> new CursoResultadoDto(c.idCurso, c.nombre,c.duracion, c.fechaInicio, c.precio)))
    }
}
