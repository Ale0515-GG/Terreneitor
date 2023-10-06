import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Unidad = sequelize.define('unidad', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombrePropiedad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.STRING
    },
    TipoPropiedad: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    Precio: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        
    },
    PropietarioID:{
        type: DataTypes.INTEGER,
        allowNull: false,
    } 

}, {
    timestamps: false // Esto desactiva las columnas createdAt y updatedAt
});
