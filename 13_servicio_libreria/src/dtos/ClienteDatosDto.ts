export class ClienteDatosDto{
    idCliente:number;
    usuario:string;
    password:string;
    email:string;
    telefono:number
    
    constructor(idCliente?:number, usuario?:string, password?:string, email?:string, telefono?:number){
        this.idCliente = idCliente;
        this.usuario = usuario;
        this.password = password;
        this.email = email;
        this.telefono = telefono;
    }
}