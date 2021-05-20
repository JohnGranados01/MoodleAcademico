"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_1 = require("../modelos/usuario");
var tokenEstudiante_1 = __importDefault(require("../clases/tokenEstudiante"));
var tokenProfe_1 = __importDefault(require("../clases/tokenProfe"));
var authRoute = express_1.Router();
//Login
authRoute.post('/entrar', function (req, res) {
    var body = req.body;
    usuario_1.Usuario.findOne({ correo: body.correo }, function (err, usuarioDB) {
        if (err)
            throw err;
        if (!usuarioDB) {
            return res.json({
                ok: false,
                token: "Parece que las credenciales son incorrectas"
            });
        }
        if (usuarioDB.compararContrasena(body.password)) {
            var miToken = "";
            if (usuarioDB.estudiante) {
                miToken = tokenEstudiante_1.default.getToken({
                    _id: usuarioDB._id,
                    correo: usuarioDB.correo,
                    password: usuarioDB.password
                });
                res.json({
                    ok: true,
                    estudiante: usuarioDB.estudiante,
                    token: miToken
                });
            }
            else {
                miToken = tokenProfe_1.default.getToken({
                    _id: usuarioDB._id,
                    correo: usuarioDB.correo,
                    password: usuarioDB.password
                });
                res.json({
                    ok: true,
                    estudiante: usuarioDB.estudiante,
                    token: miToken
                });
            }
        }
        else {
            res.json({
                ok: false,
                token: "Parece que las credenciales son incorrectas"
            });
        }
    });
});
exports.default = authRoute;
