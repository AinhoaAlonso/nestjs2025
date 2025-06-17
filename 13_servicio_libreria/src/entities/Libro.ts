import { identity } from "rxjs";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { Venta } from "./Venta";

@Entity("libros")
export class Libro{
    @PrimaryColumn()
    isbn: number;
    @Column()
    titulo: string;
    @Column()
    autor:string;
    @Column()
    precio:number;
    @Column()
    paginas:number;
    @Column()
    idTema:number;

    @OneToMany(()=>Venta,venta=>venta.libro)
    ventas:Venta[];

    constructor(isbn?:number, titulo?:string, autor?:string, precio?:number, paginas?:number, idTema?:number){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.paginas = paginas;
        this.idTema = idTema;
    }
}