"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.User = connection_1.default.define('user', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, Nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, Apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, CorreoElectronico: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    }, NumeroTelefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false // Esto desactiva las columnas createdAt y updatedAt
});
