import { Router } from 'express';
import { loginUser, newUser } from '../controllers/user';
import { newUnidad } from '../controllers/unidad';

const router = Router();

router.post('/', newUnidad);


export default router;