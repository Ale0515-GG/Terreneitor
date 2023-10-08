"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const unidad_1 = require("../controllers/unidad");
class UnidadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', unidad_1.unidadController.list); //ruta inicial
        this.router.post('/', unidad_1.unidadController.create);
        this.router.put('/:id', unidad_1.unidadController.update);
        this.router.delete('/:id', unidad_1.unidadController.delete);
        this.router.get('/:id', unidad_1.unidadController.select);
    }
}
const unidadRoutes = new UnidadRoutes();
exports.default = unidadRoutes.router;
