import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./Cliente";
import { Libro } from "./Libro";

@Entity("ventas")
export class Venta{
    @PrimaryGeneratedColumn()
    idVenta:number;

    @ManyToOne(()=>Cliente, cliente=>cliente.ventas)
    @JoinColumn({name: 'idCliente', referencedColumnName: 'idCliente'})
    cliente:Cliente;

    @ManyToOne(()=>Libro, libro=>libro.ventas)
    @JoinColumn({name: 'idLibro', referencedColumnName: 'isbn'})
    libro:Libro;
    @Column()
    fecha:Date;

    constructor(idVenta?:number, cliente?: Cliente, libro?:Libro, fecha?:Date){
        this.idVenta = idVenta;
        this.cliente = cliente;
        this.libro = libro;
        this.fecha = fecha;
    }
}