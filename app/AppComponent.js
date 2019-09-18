System.register(["angular2/core", 'angular2/router', './componentes/hotel-info.component', './componentes/hotel-reservation.component', './componentes/hotel-about.component', './componentes/hotel-contacts.component', "./componentes/hotel-findjob.component", './componentes/hotel-footer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hotel_info_component_1, hotel_reservation_component_1, hotel_about_component_1, hotel_contacts_component_1, hotel_findjob_component_1, hotel_footer_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hotel_info_component_1_1) {
                hotel_info_component_1 = hotel_info_component_1_1;
            },
            function (hotel_reservation_component_1_1) {
                hotel_reservation_component_1 = hotel_reservation_component_1_1;
            },
            function (hotel_about_component_1_1) {
                hotel_about_component_1 = hotel_about_component_1_1;
            },
            function (hotel_contacts_component_1_1) {
                hotel_contacts_component_1 = hotel_contacts_component_1_1;
            },
            function (hotel_findjob_component_1_1) {
                hotel_findjob_component_1 = hotel_findjob_component_1_1;
            },
            function (hotel_footer_component_1_1) {
                hotel_footer_component_1 = hotel_footer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Welcome Hotel Dreams Las Mareas";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "mi-app",
                        templateUrl: "app/vistas/home.html",
                        directives: [router_1.ROUTER_DIRECTIVES, hotel_info_component_1.HotelInfoComponent, hotel_reservation_component_1.HotelReservationComponent, hotel_about_component_1.HotelAboutComponent, hotel_contacts_component_1.HotelContactsComponent, hotel_findjob_component_1.HotelFindJobComponent, hotel_footer_component_1.HotelFooterComponet],
                        styleUrls: ["app/assets/css/estilos.css"] //Cargar los estilos de la página
                    }),
                    router_1.RouteConfig([
                        { path: "/", name: "Home", component: hotel_info_component_1.HotelInfoComponent, useAsDefault: true },
                        { path: "/reservation", name: "Reservation", component: hotel_reservation_component_1.HotelReservationComponent },
                        { path: "/about", name: "About", component: hotel_about_component_1.HotelAboutComponent },
                        { path: "/contacts", name: "Contacts", component: hotel_contacts_component_1.HotelContactsComponent },
                        { path: "/findjob", name: "FindJob", component: hotel_findjob_component_1.HotelFindJobComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=AppComponent.js.map