import {Request, Response } from 'express';

import pool from '../database';

class ReciboController {
    public async list (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
             return await connection.query(
                 "SELECT * FROM recibo"
             );
        })   
         res.json(result);
    }

    public async select(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM recibo WHERE id=?',[id]
            );
        })
        if (result.length >0){
            return res.json(result[0]); //revuelve al cliente
        }
        console.log(result);
        res.status(404).json({text:'La recibo no existe'});//codigo de estado
    }

        public async create (req:Request, res:Response): Promise<void>{
        //console.log(req.body)
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'INSERT INTO recibo set ?',[req.body]
            );
        })
    
        res.json({texto:"unirecibodad Saved"});
    
    }

    public async delete(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'DELETE FROM recibo WHERE IdCita=?',[id]
            );
        })
        res.json({text:"unidad "+req.params.id+" was deleted"});
        // res.json({text:"deleting cita"});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const { id } = req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                "UPDATE recibo SET ? WHERE Idunidad =?", [req.body, id]
            );
        });
        res.json({ text: "unidad " + req.params.id + " was updated" });
    }        

 

public async listByUserId(req: Request, res: Response): Promise<any> {
    const { idUsuario } = req.params;
    const result = await pool.then(async (connection) => {
        return await connection.query(
            'SELECT * FROM recibo WHERE IdUsuario = ?', [idUsuario]
        );
    });

    res.json(result);
}
}
export const reciboController = new ReciboController()