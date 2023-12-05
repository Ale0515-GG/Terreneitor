import { Router } from "express";

import { reciboController } from "../controllers/resibo";

class ReciboRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', reciboController.list);
        this.router.post('/', reciboController.create);
        this.router.put('/:id', reciboController.update);
        this.router.delete('/:id', reciboController.delete);
        this.router.get('/:id', reciboController.select);

        // Nuevo endpoint para obtener recibos por ID de usuario
        this.router.get('/usuario/:idUsuario', reciboController.listByUserId);
    }
}

const reciboRoutes = new ReciboRoutes();
export default reciboRoutes.router;
