import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LibroDatosDto } from 'src/dtos/LibroDatosDto';
import { Libro } from 'src/entities/Libro';
import { Repository } from 'typeorm';

@Injectable()
export class LibrosService {
  constructor(@InjectRepository(Libro) private librosRepository:Repository<Libro>){}

  async catalogo():Promise<LibroDatosDto[]>{
    const libros:Libro[] = await this.librosRepository.find();
    return libros.map(li=> new LibroDatosDto(li.isbn, li.titulo, li.autor, li.precio, li.paginas));
  }
}
