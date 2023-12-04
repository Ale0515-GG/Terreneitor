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
   
        // ... (otros métodos)

// Nuevo endpoint para obtener unidades por ID de usuario
this.router.get('/usuario/:idUsuario', unidadController.listByUserId);

    }

}
const  unidadRoutes = new UnidadRoutes();
export default unidadRoutes.router;