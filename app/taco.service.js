System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TacoService;
    return {
        setters:[],
        execute: function() {
            TacoService = (function () {
                function TacoService() {
                }
                TacoService.prototype.getTacos = function () {
                    return ["lettuc", "tomatoes", "cheese"];
                };
                return TacoService;
            }());
            exports_1("TacoService", TacoService);
        }
    }
});
//# sourceMappingURL=taco.service.js.map