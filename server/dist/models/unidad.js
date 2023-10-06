"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unidad = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Unidad = connection_1.default.define('unidad', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombrePropiedad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    TipoPropiedad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Precio: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    PropietarioID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false // Esto desactiva las columnas createdAt y updatedAt
});
