import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

@Entity("matriculas")
export class Matricula{
    @ManyToOne(()=> Alumno, alumno => alumno.matriculas)
    @JoinColumn({name:"usuario", referencedColumnName:"usuario"})
    usuario:Alumno;

    @ManyToOne(()=> Curso, curso => curso.matriculas)
    @JoinColumn({name:"idCurso", referencedColumnName:"idCurso"})
    idCurso:Curso;
    
    @Column()
    nota:number;

    constructor(usuario:Alumno, idCurso:Curso, nota:number)
    {
        this.usuario = usuario;
        this.idCurso = idCurso;
        this.nota = nota;
    }
}