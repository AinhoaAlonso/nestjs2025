import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Matricula } from "./Matricula";


@Entity("cursos")
export class Curso{
    @PrimaryGeneratedColumn()
    idCurso:number;
    @Column()
    nombre:string;
    @Column()
    duracion:number;
    @Column({type:Date})
    fechaInicio:string;
    @Column()
    precio:number;
    @OneToMany(()=> Matricula, matricula => matricula.idCurso)
    matriculas: Matricula[];

    

    constructor(idCurso?:number, nombre?:string, duracion?:number, fechaInicio?:string, precio?:number){
        this.idCurso = idCurso;
        this.nombre = nombre;
        this.duracion = duracion;
        this.fechaInicio = fechaInicio;
        this.precio = precio;
    }
}