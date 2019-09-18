import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {Contacto} from "../modelo/contactos";
import { HotelService } from '../servicios/hotel.service';



@Component({
    selector: "hotel-contacts",
    templateUrl: "app/vistas/hotel-contacts.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [HotelService]
})

export class HotelContactsComponent implements OnInit{
    
    public titulo: string = "Por favor dejenos su comentario";
    public contacto: Contacto;
    constructor(private _servicio:HotelService){

    }

    ngOnInit() {
        this.contacto = new Contacto("","","");
    }

    onSubmit(){
        this._servicio.guardarContacto(this.contacto);
    }
}