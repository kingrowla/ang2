System.register(['angular2/core', './taco.service', './favorite.component'], function(exports_1, context_1) {
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
    var core_1, taco_service_1, favorite_component_1;
    var TacoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (taco_service_1_1) {
                taco_service_1 = taco_service_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            TacoComponent = (function () {
                function TacoComponent(tacoSer) {
                    this.title = " super tacos";
                    this.post = {
                        title: "title",
                        isFav: true
                    };
                    this.tacquerias = tacoSer.getTacos();
                }
                TacoComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                TacoComponent = __decorate([
                    core_1.Component({
                        selector: 'tacos',
                        template: "\n        <h2>Tacos anonomyous{{title}}</h2>\n        <ul>\n        <li *ngFor=\"#tacs of tacquerias\">\n            {{tacs}}\n        </li>\n        </ul>\n        <favorite [is-favorite]=\"post.isFav\" (change)=\"onFavoriteChange($event)\"></favorite>\n    ",
                        providers: [taco_service_1.TacoService],
                        directives: [favorite_component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [taco_service_1.TacoService])
                ], TacoComponent);
                return TacoComponent;
            }());
            exports_1("TacoComponent", TacoComponent);
        }
    }
});
//# sourceMappingURL=taco.component.js.map