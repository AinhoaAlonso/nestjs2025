import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from 'src/model/Curso';
import { Repository } from 'typeorm';

@Injectable()
export class CursosService {
    constructor(@InjectRepository(Curso) private cursosRepository:Repository<Curso>){}

    getCursos():Promise<Curso[]>{
        return this.cursosRepository.find();
    }
}
