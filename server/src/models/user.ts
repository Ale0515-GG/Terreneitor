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
    Nombre: {
        type: DataTypes.STRING
    },
    Apellido: {
        type: DataTypes.STRING
    },
    CorreoElectronico: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false // Esto desactiva las columnas createdAt y updatedAt
});
