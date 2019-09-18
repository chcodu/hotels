System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Contacto;
    return {
        setters:[],
        execute: function() {
            Contacto = (function () {
                function Contacto(_nombre, _email, _comentario) {
                    this.Nombre = _nombre;
                    this.Email = _email;
                    this.Comentario = _comentario;
                }
                return Contacto;
            }());
            exports_1("Contacto", Contacto);
        }
    }
});
//# sourceMappingURL=contactos.js.map