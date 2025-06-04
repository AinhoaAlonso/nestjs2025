import { IsDate, IsInt, IsString, Length } from "class-validator";

export class CursoAltaDto{
    @IsString()
    @Length(2,20)
    @IsInt()
    nombre:string;
    @IsInt()
    duracion:number;
    @IsDate()
    fechaInicio:string;
    
    precio:number;

    constructor(nombre?:string, duracion?:number, fechaInicio?:string, precio?:number){
        this.nombre = nombre;
        this.duracion = duracion;
        this.fechaInicio = fechaInicio;
        this.precio = precio;
    }
}