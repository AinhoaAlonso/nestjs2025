import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";
@Entity("matriculas")
export class Matricula{
    //En este caso como usuario e idCurso son las 2 primary key y entonces como esta la columna no vale solo con la relacion, hay que poner las columnas tb
    @PrimaryColumn()
    usuario:string;
    @PrimaryColumn()
    idCurso:number;
    @ManyToOne(()=> Alumno, alumno => alumno.matriculas)
    @JoinColumn({name:"usuario", referencedColumnName:"usuario"})
    alumno:Alumno;
    @ManyToOne(()=> Curso, curso => curso.matriculas)
    @JoinColumn({name:"idCurso", referencedColumnName:"idCurso"})
    curso:Curso;
    @Column()
    nota:number;

    constructor(alumno:Alumno, curso:Curso, nota:number)
    {
        this.alumno = alumno
        this.curso = curso;
        this.nota = nota;
        if(alumno){
            this.usuario = alumno.usuario;
        }
        if(curso){
            this.idCurso = curso.idCurso;
        }
    }
}