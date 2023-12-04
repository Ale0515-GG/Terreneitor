"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resibo_1 = require("../controllers/resibo");
class ReciboRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', resibo_1.reciboController.list);
        this.router.post('/', resibo_1.reciboController.create);
        this.router.put('/:id', resibo_1.reciboController.update);
        this.router.delete('/:id', resibo_1.reciboController.delete);
        this.router.get('/:id', resibo_1.reciboController.select);
        // Nuevo endpoint para obtener recibos por ID de usuario
        this.router.get('/usuario/:idUsuario', resibo_1.reciboController.listByUserId);
    }
}
const reciboRoutes = new ReciboRoutes();
exports.default = reciboRoutes.router;
