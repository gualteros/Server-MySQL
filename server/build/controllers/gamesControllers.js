"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM libros', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('SELECT * FROM libros WHERE id = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                //res.json(result);
                if ((result).length > 0) {
                    return res.json((result)[0]);
                }
                res.status(404).json({ text: 'No se encontro ese libro' });
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('INSERT INTO libros set ?', [req.body]);
            res.json({ text: 'Libro Creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('DELETE FROM libros WHERE id = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ text: 'Se elimino el juego' });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('UPDATE libros set ? WHERE  id = ?', [req.body, [id]], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ text: 'the book was update' });
            });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
