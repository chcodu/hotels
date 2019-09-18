export class Hotel{
    public Nombre:string;
    public Direccion:string;
    
    constructor(private _nombre: string, private _direccion:string){
        this.Nombre = _nombre;
        this.Direccion = _direccion;
    }
}