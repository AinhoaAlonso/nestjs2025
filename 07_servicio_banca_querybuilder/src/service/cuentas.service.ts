import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { In, MoreThan, Repository } from 'typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>,
    @InjectRepository(Cliente) private clientesRepository:Repository<Cliente>,
    private dataSource:DataSource
  ){}

  async findCuentasMovimientosPorFecha(fecha:Date):Promise<Cuenta[]> {
    return this.cuentasRepository.createQueryBuilder("cuenta")
    .innerJoin("cuenta.movimientos", "mov")
    .where ("mov.fecha=:fecha1", {fecha1:fecha})
    .distinct(true)
    .getMany();
  }

  async findCuentasExtraccionesSaldo(cantidad:number):Promise<Cuenta[]> {
    return this.cuentasRepository.createQueryBuilder("cuenta")
    .innerJoin("cuenta.movimientos", "mov")
    .where("mov.cantidad>:cantidad", {cantidad:cantidad})
    .andWhere("mov.operacion=:extracción")
    .getMany();
  }

  //Cuentas asociadas al titular cuyo dni sea el parametro, solo busca uno porque Dni es unico
  async findCuentasPorTitular(dni:number):Promise<Cuenta[]>{
    return this.cuentasRepository.createQueryBuilder("cuenta")
    .innerJoin("cuenta.clientes", "cli")
    .where("cli.dni", {dni:dni})
    .getMany();
  }
  //alta de nueva cuenta
  //recibe un objeto cuenta y un array con los dnis de los titulares que va a tener esa cuenta
  //este metodo da de alta la nueva cuenta y le asigna los titulares
  //de lo que recibe 1º va a Clientes y revisa si los dnis estan en el array que nos traemos(variable que no tiene nada que ver con la tabla titulares OJO!!!!!)
  //alli los que encuentra los guarda dentro de cuenta en clientes
  // luego ya salvamos toda la cuenta y lo guarda cada dato en su sitio
  async altaCuenta(cuenta:Cuenta, titulares:number[]):Promise<Cuenta>{
    const clientes: Cliente[] = await this.clientesRepository.findBy({dni:In(titulares)});
    cuenta.clientes = clientes;
    return this.cuentasRepository.save(cuenta);    
  }

  saldoMedio():Promise<any>{
    return this.dataSource.query("select avg(saldo) as saldo from cuentas")
  }

}
