import express, { Application } from 'express';
import cors from 'cors';
import routesUser from '../routes/user';

import morgan from 'morgan';

import { User } from './user';



//pagina
import unidadRoutes from '../routes/unidad';



class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.app.use(morgan('dev'));
        
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        
        this.app.use('/api/users', routesUser);
        this.app.use('/api/unidad',unidadRoutes);
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
        this.app.use(express.urlencoded({extended:false}));
    }

    async dbConnect() {
        try {
            
            await User.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;