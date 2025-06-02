import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Cuenta } from "./Cuenta";

@Entity("clientes")
export class Cliente{
    @PrimaryColumn()
    dni:number;
    @Column()
    nombre:string;
    @Column()
    direccion:string;
    @Column()
    telefono:number;
    // Relacion muchos a muchos, no creamos un entidad con la tabla intermedia lo hacemos directamente en la clase a la que pertenece. En este caso varios clientes puede tener varias cuentas
    //1º la entidad con la que se relaciona Cuenta
    //La Relacion JOin con la tabla intermedia que es titulares, solo se hace en una de las clases hemos elegido Cuenta
    @ManyToMany(()=>Cuenta, cuenta=>cuenta.clientes)
    cuentas:Cuenta[];

    constructor(dni?:number, nombre?:string, direccion?:string, telefono?:number){
        this.dni = dni;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}