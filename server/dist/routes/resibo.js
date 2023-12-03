"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const resibo_1 = require("../controllers/resibo");
class UnidadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', resibo_1.resiboController.list); //ruta inicial
        this.router.post('/', resibo_1.resiboController.create);
        this.router.put('/:id', resibo_1.resiboController.update);
        this.router.delete('/:id', resibo_1.resiboController.delete);
        this.router.get('/:id', resibo_1.resiboController.select);
    }
}
const unidadRoutes = new UnidadRoutes();
exports.default = unidadRoutes.router;
