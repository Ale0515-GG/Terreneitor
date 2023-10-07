import { Router } from "express"; //objeto
import { unidadController } from "../controllers/unidad";

class UnidadRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',unidadController.list); //ruta inicial
        this.router.post('/',unidadController.create);
        this.router.put('/:id',unidadController.update);
        this.router.delete('/:id',unidadController.delete);
        this.router.get('/:id',unidadController.select);
    }
}
const  unidadRoutes = new UnidadRoutes();
export default unidadRoutes.router;