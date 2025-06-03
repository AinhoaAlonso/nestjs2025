export class CursoResultadoDto{
    idCurso:number;
    nombre:string;
    duracion:number;
    fechaInicio:string;
    precio:number;

    constructor(idCurso?:number, nombre?:string, duracion?:number, fechaInicio?:string, precio?:number){
        this.idCurso = idCurso;
        this.nombre = nombre;
        this.duracion = duracion;
        this.fechaInicio = fechaInicio;
        this.precio = precio;
    }
}