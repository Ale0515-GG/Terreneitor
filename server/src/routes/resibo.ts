import { Router } from "express"; //objeto
import { resiboController } from "../controllers/resibo";

class UnidadRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',resiboController.list); //ruta inicial
        this.router.post('/',resiboController.create);
        this.router.put('/:id',resiboController.update);
        this.router.delete('/:id',resiboController.delete);
        this.router.get('/:id',resiboController.select);
    }
}
const  unidadRoutes = new UnidadRoutes();
export default unidadRoutes.router;