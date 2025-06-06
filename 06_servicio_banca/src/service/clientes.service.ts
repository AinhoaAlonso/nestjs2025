import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/model/Cuenta';


@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) private clienteRepository:Repository<Cliente>,
    @InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>
  ){}

  async findByNumeroCuenta(numeroCuenta:number):Promise<Cliente[]>{
    const cuenta:Cuenta = await this.cuentasRepository.findOne({
      where:{
        numeroCuenta:numeroCuenta
      },
      relations:["clientes"]
    });
    return cuenta.clientes;
  }
 
}
