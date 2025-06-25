import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteDatosDto } from 'src/dtos/ClienteDatosDto';
import { Cliente } from 'src/entities/Cliente';
import { Repository } from 'typeorm';


@Injectable()
export class ClientesService {
  constructor(@InjectRepository(Cliente) private clienteRepository:Repository<Cliente>){}


  async autenticar(usuario:string, password:string):Promise<ClienteDatosDto> | null{
     const cliente:Cliente = await this.clienteRepository.createQueryBuilder("cliente")
     .where("usuario=:us", {us:usuario})
     .andWhere("password=:pw", {pw:password})
     .getOne();
     if(cliente){
      return new ClienteDatosDto(cliente.idCliente, cliente.usuario, cliente.password, cliente.email, cliente.telefono)
     }else{
      return null;
     }
  }
}
 