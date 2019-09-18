export class Contacto{
    public Nombre:string;
    public Email:string;
    public Comentario:string;

    constructor(_nombre:string, _email:string, _comentario:string){
        this.Nombre = _nombre;
        this.Email = _email;
        this.Comentario = _comentario;
    }
}