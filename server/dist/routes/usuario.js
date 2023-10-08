"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const usuario_1 = require("../controllers/usuario");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuario_1.usuarioController.list); //ruta inicial
        this.router.post('/', usuario_1.usuarioController.create);
        this.router.put('/:id', usuario_1.usuarioController.update);
        this.router.delete('/:id', usuario_1.usuarioController.delete);
        this.router.get('/:id', usuario_1.usuarioController.select);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
