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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT * FROM terreneitor_db.users");
            }));
            res.json(result);
        });
    }
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('SELECT * FROM terreneitor_db.users WHERE username=?', [id]);
            }));
            if (result.length > 0) {
                return res.json(result[0]); //revuelve al cliente
            }
            console.log(result);
            res.status(404).json({ text: 'La unidad no existe' }); //codigo de estado
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body)
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('INSERT INTO terreneitor_db.users set ?', [req.body]);
            }));
            res.json({ texto: "unidad Saved" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('DELETE FROM terreneitor_db.users WHERE IdCita=?', [id]);
            }));
            res.json({ text: "unidad " + req.params.id + " was deleted" });
            // res.json({text:"deleting cita"});
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("UPDATE terreneitor_db.users SET Nombre,Apellido,CorreoElectronico,NumeroTelefono, WHERE ID =?", [req.body, id]);
            }));
            res.json({ text: "unidad " + req.params.id + " was updated" });
        });
    }
    updateNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { Nombre } = req.body;
            try {
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query("UPDATE terreneitor_db.users SET Nombre = ? WHERE username = ?", [Nombre, id]);
                }));
                res.json({ text: "El Nombre del usuario con ID " + id + " ha sido actualizado" });
            }
            catch (error) {
                res.status(500).json({ error: "Ocurrió un error al actualizar el Nombre del usuario" });
            }
        });
    }
    updateApellido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { Apellido } = req.body;
            try {
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query("UPDATE terreneitor_db.users SET Apellido = ? WHERE username = ?", [Apellido, id]);
                }));
                res.json({ text: "El Apellido del usuario con ID " + id + " ha sido actualizado" });
            }
            catch (error) {
                res.status(500).json({ error: "Ocurrió un error al actualizar el Apellido del usuario" });
            }
        });
    }
    updateCorreoElectronico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { CorreoElectronico } = req.body;
            try {
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query("UPDATE terreneitor_db.users SET CorreoElectronico = ? WHERE username = ?", [CorreoElectronico, id]);
                }));
                res.json({ text: "El Correo Electrónico del usuario con ID " + id + " ha sido actualizado" });
            }
            catch (error) {
                res.status(500).json({ error: "Ocurrió un error al actualizar el Correo Electrónico del usuario" });
            }
        });
    }
    updateNumeroTelefono(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { NumeroTelefono } = req.body;
            try {
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query("UPDATE terreneitor_db.users SET NumeroTelefono = ? WHERE username = ?", [NumeroTelefono, id]);
                }));
                res.json({ text: "El Número de Teléfono del usuario con ID " + id + " ha sido actualizado" });
            }
            catch (error) {
                res.status(500).json({ error: "Ocurrió un error al actualizar el Número de Teléfono del usuario" });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
