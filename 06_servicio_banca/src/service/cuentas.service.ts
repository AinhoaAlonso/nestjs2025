import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { In, MoreThan, Repository } from 'typeorm';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>,
    @InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>,
    @InjectRepository(Cliente) private clientesRepository:Repository<Cliente>
  ){}


  async findCuentasMovimientosPorFecha(fecha1: Date): Promise<Cuenta[]> {
    const movimientos = await this.movimientosRepository.find({ 
      where: {
        fecha:fecha1
      },
      relations: ["cuenta"]
    })
     return movimientos.map(mov => mov.cuenta)
  }

  async findCuentasExtraccionesSaldo(cantidad: number): Promise<Cuenta[]> {
    const movimientos = await this.movimientosRepository.find({ 
      where: {
        cantidad: MoreThan(cantidad),
        operacion: "extracción"
      },
      relations: ["cuenta"]
    })
     return movimientos.map(mov => mov.cuenta)
  }

  //Cuentas asociadas al titular cuyo dni sea el parametro, solo busca uno porque Dni es unico
  async findCuentasPorTitular(dni:number):Promise<Cuenta[]>{
    const cliente:Cliente = await this.clientesRepository.findOne({
      where:{dni:dni},
      relations:["cuentas"]
    });
    console.log("Cliente", cliente);
    if(cliente){
      return cliente.cuentas;
    }else{
      //Si no existe ningun cliente con ese dni devuelve un array vacio
      return [];
    }
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

}
