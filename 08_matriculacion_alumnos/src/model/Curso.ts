import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";

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

    @ManyToMany(()=> Alumno, alumno =>alumno.cursos)
    @JoinTable({
        name:'matriculas',
        joinColumn:{
            name:'idCurso',
            referencedColumnName: 'idCurso'    
        },
        inverseJoinColumn: {
        name: 'usuario',
        referencedColumnName: 'usuario',
        },
    })
    alumnos:Alumno[];

    constructor(idCurso?:number, nombre?:string, duracion?:number, fechaInicio?:string, precio?:number){
        this.idCurso = idCurso;
        this.nombre = nombre;
        this.duracion = duracion;
        this.fechaInicio = fechaInicio;
        this.precio = precio;
    }
}