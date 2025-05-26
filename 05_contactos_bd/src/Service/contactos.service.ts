import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacto } from 'src/model/Contacto';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ContactosService {

  constructor(@InjectRepository(Contacto) private contactosRepository:Repository<Contacto>){}

  //Guardar contacto que no tengan email duplicado, si el alta es posible devuelve true
  async save(contacto:Contacto):Promise<boolean>{
    const resultado:Contacto = await this.contactosRepository.findOneBy({email:contacto.email})
    if(resultado){
      return false
    }else{
      this.contactosRepository.save(contacto);
      return true;
    }
  }
  findByNombre(nombre:string):Promise<Contacto>{
    return this.contactosRepository.findOneBy({nombre:nombre});
  }
  findAll():Promise<Contacto[]>{
    return this.contactosRepository.find();
  }
  //Devuelve true si realmente lo ha eliminado
  async deleteByEmail(email:string):Promise<boolean>{
    const result:DeleteResult = await this.contactosRepository.delete({email:email});
    //Si se cumple esta condicion significa que las filas afectadas son mayores que cero, que lo ha eliminado
    return result.affected>0
    
  }
}
