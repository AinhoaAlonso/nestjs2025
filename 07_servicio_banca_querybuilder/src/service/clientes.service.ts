import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/model/Cuenta';


@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) private clienteRepository:Repository<Cliente>,
  ){}

  async findByNumeroCuenta(numeroCuenta:number):Promise<Cliente[]>{
    return this.clienteRepository.createQueryBuilder("cliente")
    .innerJoin("cliente.cuentas", "c")
    .where("c.numeroCuenta=:numCuenta", {numCuenta:numeroCuenta})
    .getMany();
  }
}
