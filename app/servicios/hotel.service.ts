import {Injectable} from "angular2/core";
import { Contacto } from '../modelo/contactos';


@Injectable()
export class HotelService{
    public contacto: Contacto;
    constructor(){}


    guardarContacto(_contacto:Contacto){
        console.log(_contacto);
        
    }
}