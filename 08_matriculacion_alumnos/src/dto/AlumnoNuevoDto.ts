
import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Max, Min } from "class-validator";

export class AlumnoNuevoDto{
    @IsString()
    @IsNotEmpty()
    usuario:string;
    @IsString()
    @IsNotEmpty()
    @Length(6,10)
    password:string;
    @IsString()
    nombre:string;
    @IsEmail()
    email:string;
    @IsInt()
    @Min(18)
    @Max(99)
    edad:number;

    constructor(usuario:string, password:string, nombre?:string, email?:string, edad?:number){
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }
}