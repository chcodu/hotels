import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector: "hotel-about",
    templateUrl: "app/vistas/hotel-about.html",
    directives: [ROUTER_DIRECTIVES]
})

export class HotelAboutComponent{
    public titulo: string = "About";
    constructor(){}
}