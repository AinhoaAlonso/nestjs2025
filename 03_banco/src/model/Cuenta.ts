export class Cuenta{
    numeroCuenta: string;
    saldo: number;
    titular: string;
    tipo: string;
  clientes: import("c:/nestjs2025/06_servicio_banca/src/model/Cliente").Cliente[];

    constructor(numeroCuenta?:string, saldo?:number, titular?:string, tipo?:string){
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
        this.titular = titular;
        this.tipo = tipo;
    }
}