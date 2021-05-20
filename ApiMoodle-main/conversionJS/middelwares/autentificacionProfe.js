"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarTokenProfe = void 0;
var tokenProfe_1 = __importDefault(require("../clases/tokenProfe"));
var verificarTokenProfe = function (req, res, next) {
    var adminToken = req.get('miToken') || '';
    tokenProfe_1.default.comprobarToken(adminToken).then(function (decoded) {
        req.usuario = decoded.usuario;
        next();
    }).catch(function (err) {
        res.json({
            ok: false,
            mensaje: 'Token inválido',
            err: err
        });
    });
};
exports.verificarTokenProfe = verificarTokenProfe;
