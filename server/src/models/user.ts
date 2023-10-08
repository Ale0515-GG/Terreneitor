import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const User = sequelize.define('user', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },Nombre:{
        type: DataTypes.STRING,
        allowNull: false

   }, Apellido: {
       type: DataTypes.STRING,
       allowNull: false

   },CorreoElectronico:{
   type: DataTypes.STRING,
   unique: true,
   allowNull: false
   
   },NumeroTelefono: { 
       type: DataTypes.STRING, 
        allowNull: true 
    }
}, {
    timestamps: false // Esto desactiva las columnas createdAt y updatedAt
});
