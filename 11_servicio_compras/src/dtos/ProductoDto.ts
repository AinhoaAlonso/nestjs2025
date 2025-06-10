import { IsInt, IsNumber, IsString, Max, Min } from "class-validator";

export class ProductoDto{
    @IsString()
    producto:string;
    @IsNumber()
    precioUnitario:number;
    @IsString()
    disponibilidad: string;
    constructor(producto?:string, precioUnitario?:number, disponibilidad?:string){
        this.producto = producto;
        this.precioUnitario = precioUnitario;
        this.disponibilidad = disponibilidad;
    }
}