import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import {PrimaryGeneratedColumn} from "typeorm";
import { Cuenta } from "./Cuenta";

@Entity('movimientos')
export class Movimiento{
    @PrimaryGeneratedColumn()
    idMovimiento: number;
    @Column({type: 'date'})
    fecha:Date;
    @Column()
    cantidad:number;
    @Column()
    operacion:string;
    //Relacion de tablas
    @ManyToOne(()=> Cuenta, cuenta => cuenta.movimientos)
    @JoinColumn({name:"idCuenta", referencedColumnName:"numeroCuenta"})
    cuenta: Cuenta;

    constructor(idMovimiento?: number, cuenta?: Cuenta, fecha?: Date, cantidad?: number, operacion?:string) {
        this.idMovimiento = idMovimiento || 0; //se inicializa a 0
        this.cuenta = cuenta || null; //se iniciliza a 0 si no se proporciona
        this.fecha = fecha || new Date(); //si no se dice, pone la fecha actual
        this.cantidad = cantidad || 0;
        this.operacion = operacion || '';
    }
}