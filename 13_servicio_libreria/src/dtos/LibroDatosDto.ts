export class LibroDatosDto{
    isbn: number;
    titulo: string;
    autor:string;
    precio:number;
    paginas:number;
    
    constructor(isbn?:number, titulo?:string, autor?:string, precio?:number, paginas?:number){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.paginas = paginas;
    }
}