import { Injectable } from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';

@Injectable()
export class BancoService {
  cuentasBanco: Cuenta[]=[
    new Cuenta ("ES2100123456789012345678", 15230.75, "Carlos Méndez", "Cuenta Corriente"),
    new Cuenta ("ES3200765432109876543210", 840.50, "Laura Sánchez", "Cuenta Ahorro"),
    new Cuenta ("ES4100987654321098765432", 5000.00, "Miguel Torres", "Cuenta Corriente"),
    new Cuenta ("ES5100234567890123456789", 120.90, "Andrea López", "Cuenta Nómina"),
    new Cuenta ("ES6100345678901234567890", 9800.00, "Luis Rodríguez", "Cuenta Empresa"),
    new Cuenta ("ES7200456789012345678901", 320.75, "María González", "Cuenta Ahorro"),
    new Cuenta ("ES8300567890123456789012", 7200.00, "Javier Morales", "Cuenta Corriente"),
    new Cuenta ("ES9400678901234567890123", 210.00, "Patricia Ruiz", "Cuenta Nómina"),
    new Cuenta ("ES0500789012345678901234", 14500.25, "Fernando Gil", "Cuenta Empresa"),
    new Cuenta ("ES1600890123456789012345", 75.10, "Elena Navarro", "Cuenta Ahorro" ),
  ]

  getCuentaSaldoMinimo(saldo:number):Cuenta[]{
    return this.cuentasBanco.filter(i => i.saldo >= saldo);
  }

  getCuentaPorNumeroCuenta(numeroCuenta:string):Cuenta{
    //Se utiliza find cuando solo buscamos uno
    return this.cuentasBanco.find(i => i.numeroCuenta == numeroCuenta);
  }

  getCuentaPorTipo(tipo:string):Cuenta[]{
    return this.cuentasBanco.filter(i=> i.tipo == tipo);
  }

  saveCuenta(cuenta:Cuenta):boolean{
    //Compara si ese numero de cuenta esta en el array y si no lo está lo añade
    if(!this.cuentasBanco.some(c => c.numeroCuenta == cuenta.numeroCuenta)){
      this.cuentasBanco.push(cuenta);
      return true;
    }
      return false;
  }

  deleteByNumber(numeroCuenta:string):void{
    //Crea un nuevo array donde le dices que te guarde todas las cuentas que sean diferentes a la que quieres borrar.
    this.cuentasBanco = this.cuentasBanco.filter(c=>c.numeroCuenta!= numeroCuenta);
  }
}
