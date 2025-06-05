import { IsEmail, IsInt, IsString, Max, Min } from "class-validator";
export class MatriculaDatosDto{
    @IsString()
    usuario:string;
    @IsEmail()
    email:string;
    @IsString()
    nombre:string; //nombre del curso
    @IsInt()
    @Min(0)
    @Max(10)
    nota:number;
    constructor(usuario:string, email:string, nombre:string, nota:number){
        this.usuario = usuario;
        this.email = email;
        this.nombre = nombre;
        this.nota = nota;
    }
}