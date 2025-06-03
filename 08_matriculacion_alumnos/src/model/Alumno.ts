import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Curso } from "./Curso";

@Entity("alumnos")
export class Alumno{
    AlumnoResultadoDto(usuario: string, password: string, nombre: string, email: string, edad: number): any {
      throw new Error('Method not implemented.');
    }
    @PrimaryColumn()
    usuario:string;
    @Column()
    password:string;
    @Column()
    nombre:string;
    @Column()
    email:string;
    @Column()
    edad:number;

    //Varios alumnos puede estar matriculados en varios cursos, relacion manytomany
    @ManyToMany(()=>Curso, curso=>curso.alumnos)
    cursos:Curso[];

    constructor(usuario?:string, password?:string, nombre?:string, email?:string, edad?:number){
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

}