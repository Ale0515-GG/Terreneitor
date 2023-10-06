"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUnidad = void 0;
const unidad_1 = require("../models/unidad");
const newUnidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombrePropiedad, descripcion, tipoPropiedad, precio, propietarioID, } = req.body;
    try {
        // Guardarmos usuario en la base de datos
        yield unidad_1.Unidad.create({
            NombrePropiedad: nombrePropiedad,
            Descripcion: descripcion,
            TipoPropiedad: tipoPropiedad,
            PrecioPorNoche: precio,
            PropietarioID: propietarioID
        });
        res.json({
            msg: `Unidad ${nombrePropiedad} creada exitosamente!`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        });
    }
});
exports.newUnidad = newUnidad;
