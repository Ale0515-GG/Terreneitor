import {Request, Response } from 'express';

import pool from '../database';

class UsuarioController {
    public async list (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
             return await connection.query(
                 "SELECT * FROM terreneitor_db.users"
             );
        })   
         res.json(result);
    }

    public async select(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM terreneitor_db.users WHERE username=?',[id]
            );
        })
        if (result.length >0){
            return res.json(result[0]); //revuelve al cliente
        }
        console.log(result);
        res.status(404).json({text:'La unidad no existe'});//codigo de estado
    }

        public async create (req:Request, res:Response): Promise<void>{
        //console.log(req.body)
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'INSERT INTO terreneitor_db.users set ?',[req.body]
            );
        })
    
        res.json({texto:"unidad Saved"});
    
    }

    public async delete(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'DELETE FROM terreneitor_db.users WHERE IdCita=?',[id]
            );
        })
        res.json({text:"unidad "+req.params.id+" was deleted"});
        // res.json({text:"deleting cita"});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const { id } = req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                "UPDATE terreneitor_db.users SET Nombre,Apellido,CorreoElectronico,NumeroTelefono, WHERE ID =?", [req.body, id]
            );
        });
        res.json({ text: "unidad " + req.params.id + " was updated" });
    }        


    public async updateNombre(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { Nombre } = req.body;

        try {
            const result = await pool.then(async (connection) => {
                return await connection.query(
                    "UPDATE terreneitor_db.users SET Nombre = ? WHERE ID = ?",
                    [Nombre, id]
                );
            });

            res.json({ text: "El Nombre del usuario con ID " + id + " ha sido actualizado" });
        } catch (error) {
            res.status(500).json({ error: "Ocurrió un error al actualizar el Nombre del usuario" });
        }
    }

    public async updateApellido(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { Apellido } = req.body;

        try {
            const result = await pool.then(async (connection) => {
                return await connection.query(
                    "UPDATE terreneitor_db.users SET Apellido = ? WHERE ID = ?",
                    [Apellido, id]
                );
            });

            res.json({ text: "El Apellido del usuario con ID " + id + " ha sido actualizado" });
        } catch (error) {
            res.status(500).json({ error: "Ocurrió un error al actualizar el Apellido del usuario" });
        }
    }

    public async updateCorreoElectronico(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { CorreoElectronico } = req.body;

        try {
            const result = await pool.then(async (connection) => {
                return await connection.query(
                    "UPDATE terreneitor_db.users SET CorreoElectronico = ? WHERE ID = ?",
                    [CorreoElectronico, id]
                );
            });

            res.json({ text: "El Correo Electrónico del usuario con ID " + id + " ha sido actualizado" });
        } catch (error) {
            res.status(500).json({ error: "Ocurrió un error al actualizar el Correo Electrónico del usuario" });
        }
    }

    public async updateNumeroTelefono(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { NumeroTelefono } = req.body;

        try {
            const result = await pool.then(async (connection) => {
                return await connection.query(
                    "UPDATE terreneitor_db.users SET NumeroTelefono = ? WHERE ID = ?",
                    [NumeroTelefono, id]
                );
            });

            res.json({ text: "El Número de Teléfono del usuario con ID " + id + " ha sido actualizado" });
        } catch (error) {
            res.status(500).json({ error: "Ocurrió un error al actualizar el Número de Teléfono del usuario" });
        }
    }
}
 


export const usuarioController = new UsuarioController()