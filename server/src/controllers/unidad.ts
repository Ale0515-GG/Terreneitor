import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import { Unidad } from '../models/unidad';
import jwt from 'jsonwebtoken';

export const newUnidad = async (req: Request, res: Response) => {

    const {nombrePropiedad, descripcion, tipoPropiedad, precio, propietarioID,} = req.body;

    try {
        // Guardarmos usuario en la base de datos
        await Unidad.create({
            NombrePropiedad:nombrePropiedad,
            Descripcion:descripcion,
            TipoPropiedad:tipoPropiedad,
            PrecioPorNoche:precio,
            PropietarioID:propietarioID
        })
    
        res.json({
            msg: `Unidad ${nombrePropiedad} creada exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}
