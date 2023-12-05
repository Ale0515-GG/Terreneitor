"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioRed_1 = require("../controllers/usuarioRed");
class UsuarioRedRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuarioRed_1.usuarioRedController.list);
        this.router.post('/', usuarioRed_1.usuarioRedController.create);
        this.router.put('/:id', usuarioRed_1.usuarioRedController.update);
        this.router.delete('/:id', usuarioRed_1.usuarioRedController.delete);
        this.router.get('/:id', usuarioRed_1.usuarioRedController.select);
    }
}
const usuarioRedRoutes = new UsuarioRedRoutes();
exports.default = usuarioRedRoutes.router;
