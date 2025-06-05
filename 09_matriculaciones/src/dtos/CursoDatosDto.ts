import { IsInt, IsString } from "class-validator";

export class CursoDatosDto{
    @IsInt()
    idCurso:number;
    @IsString()
    nombre:string;

    constructor(idCurso:number, nombre:string){
        this.idCurso = idCurso;
        this.nombre = nombre;
    }
}