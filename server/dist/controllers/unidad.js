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
exports.unidadController = void 0;
const database_1 = __importDefault(require("../database"));
class UnidadController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT * FROM unidad");
            }));
            res.json(result);
        });
    }
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('SELECT * FROM unidad WHERE id=?', [id]);
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
                return yield connection.query('INSERT INTO unidad set ?', [req.body]);
            }));
            res.json({ texto: "unidad Saved" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('DELETE FROM unidad WHERE IdCita=?', [id]);
            }));
            res.json({ text: "unidad " + req.params.id + " was deleted" });
            // res.json({text:"deleting cita"});
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("UPDATE unidad SET ? WHERE Idunidad =?", [req.body, id]);
            }));
            res.json({ text: "unidad " + req.params.id + " was updated" });
        });
    }
}
exports.unidadController = new UnidadController();
