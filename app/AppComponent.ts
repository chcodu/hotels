import {Component} from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { HotelInfoComponent } from './componentes/hotel-info.component';
import { HotelReservationComponent } from './componentes/hotel-reservation.component';
import { HotelAboutComponent } from './componentes/hotel-about.component';
import { HotelContactsComponent } from './componentes/hotel-contacts.component';
import { HotelFindJobComponent} from "./componentes/hotel-findjob.component";
import { HotelFooterComponet } from './componentes/hotel-footer.component';



@Component({
    selector: "mi-app",
    templateUrl: "app/vistas/home.html",
    directives: [ROUTER_DIRECTIVES,HotelInfoComponent,HotelReservationComponent,HotelAboutComponent,HotelContactsComponent,HotelFindJobComponent,HotelFooterComponet], //agrega Componentes al componente principal
    styleUrls: ["app/assets/css/estilos.css"] //Cargar los estilos de la página
})

@RouteConfig([
    {path:"/", name:"Home", component: HotelInfoComponent, useAsDefault: true},
    {path:"/reservation", name:"Reservation", component: HotelReservationComponent},
    {path:"/about", name:"About", component: HotelAboutComponent},
    {path:"/contacts", name:"Contacts", component: HotelContactsComponent},
    {path:"/findjob", name:"FindJob", component: HotelFindJobComponent}
])

export class AppComponent{
    public titulo: string = "Welcome Hotel Dreams Las Mareas";

    constructor(){

    }
}
