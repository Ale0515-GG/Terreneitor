import { Router } from "express"; //objeto
import { usuarioController } from "../controllers/usuario";

class UsuarioRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',usuarioController.list); //ruta inicial
        this.router.post('/',usuarioController.create);
        this.router.put('/:id',usuarioController.update);
        this.router.delete('/:id',usuarioController.delete);
        this.router.get('/:id',usuarioController.select);
    }
}
const  usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;