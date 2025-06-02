import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Movimiento } from "./Movimiento";
import { Cliente } from "./Cliente";

@Entity('cuentas')

export class Cuenta{
    @PrimaryColumn()
    numeroCuenta:number;
    @Column()
    saldo: number;
    @Column()
    tipocuenta: string;
    @OneToMany(()=> Movimiento, movimiento => movimiento.cuenta)
    movimientos: Movimiento[];
    // Relacion muchos a muchos, no creamos un entidad con la tabla intermedia lo hacemos directamente en la clase a la que pertenece. En este caso varios clientes puede tener varias cuentas
    //1º la entidad con la que se relaciona Cuenta
    //La Relacion JOin con la tabla intermedia que es titulares, solo se hace en una de las clases, hemos elegido Cuenta
    @ManyToMany(()=> Cliente, cliente => cliente.cuentas)
    @JoinTable({
        name: 'titulares',
        joinColumn: {
        name: 'idCuenta',
        referencedColumnName: 'numeroCuenta',
        },
        inverseJoinColumn: {
        name: 'idCliente',
        referencedColumnName: 'dni',
        },
    })
    clientes: Cliente[];

    constructor(numeroCuenta?:number, saldo?:number, tipocuenta?:string){
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
        this.tipocuenta = tipocuenta;
    }
}