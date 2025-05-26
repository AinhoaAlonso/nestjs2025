import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacto } from 'src/model/Contacto';
import { Repository } from 'typeorm';

@Injectable()
export class ContactosService {

  constructor(@InjectRepository(Contacto) private contactosRepository:Repository<Contacto>){}

  save(contacto:Contacto):Promise<Contacto>{
    return this.contactosRepository.save(contacto);
  }
  findByNombre(nombre:string):Promise<Contacto>{
    return this.contactosRepository.findOneBy({nombre:nombre});
  }
  findAll():Promise<Contacto[]>{
    return this.contactosRepository.find();
  }
  deleteByEmail(email:string):void{
    this.contactosRepository.delete({email:email})
  }
}
