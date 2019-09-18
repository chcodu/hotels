System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hotel;
    return {
        setters:[],
        execute: function() {
            Hotel = (function () {
                function Hotel(_nombre, _direccion) {
                    this._nombre = _nombre;
                    this._direccion = _direccion;
                    this.Nombre = _nombre;
                    this.Direccion = _direccion;
                }
                return Hotel;
            }());
            exports_1("Hotel", Hotel);
        }
    }
});
//# sourceMappingURL=hotel.js.map