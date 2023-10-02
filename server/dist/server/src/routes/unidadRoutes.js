"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const unidad_component_1 = require("../../../frontend/src/app/components/unidad/unidad.component");
class unidadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', unidad_component_1.UnidadComponent.list); //ruta inicial
        this.router.post('/', unidad_component_1.UnidadComponent.create);
        this.router.put('/:id', unidad_component_1.UnidadComponent.update);
        this.router.delete('/:id', unidad_component_1.UnidadComponent.delete);
        this.router.get('/:id', unidad_component_1.UnidadComponent.select);
    }
}
const citaRoutes = new CitaRoutes();
exports.default = citaRoutes.router;
