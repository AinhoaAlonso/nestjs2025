import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

@Entity("matriculas")
export class Matricula{
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
        this.usuario = usuario;
        this.idCurso = idCurso;
        this.nota = nota;
    }
}