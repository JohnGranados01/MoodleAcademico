"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarTokenEstudiante = void 0;
var tokenEstudiante_1 = __importDefault(require("../clases/tokenEstudiante"));
var verificarTokenEstudiante = function (req, res, next) {
    var usuarioToken = req.get('miToken') || '';
    tokenEstudiante_1.default.comprobarToken(usuarioToken).then(function (decoded) {
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
exports.verificarTokenEstudiante = verificarTokenEstudiante;
