import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector: "hotel-findjob",
    templateUrl: "app/vistas/hotel-findjob.html",
    directives: [ROUTER_DIRECTIVES]
})

export class HotelFindJobComponent{
    public titulo: string = "Find New Job";
    constructor(){}
}