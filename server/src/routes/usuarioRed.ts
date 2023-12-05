import { Router } from "express";
import { usuarioRedController } from "../controllers/usuarioRed";

class UsuarioRedRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', usuarioRedController.list);
    this.router.post('/', usuarioRedController.create);
    this.router.put('/:id', usuarioRedController.update);
    this.router.delete('/:id', usuarioRedController.delete);
    this.router.get('/:id', usuarioRedController.select);
  }
}

const usuarioRedRoutes = new UsuarioRedRoutes();
export default usuarioRedRoutes.router;
