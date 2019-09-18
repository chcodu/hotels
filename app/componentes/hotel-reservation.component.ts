import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector: "hotel-reservation",
    templateUrl: "app/vistas/hotel-reservation.html",
    directives: [ROUTER_DIRECTIVES]
})

export class HotelReservationComponent{
    public titulo: string = "New Reservation";
    constructor(){}
}