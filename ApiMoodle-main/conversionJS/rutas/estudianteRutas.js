"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_1 = require("../modelos/usuario");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var usuarioRutas = express_1.Router();
//Crear Usuario
usuarioRutas.post('/crear', function (req, res) {
    var nombresReq = req.body.nombres;
    var apellidosReq = req.body.apellidos;
    var documentoReq = req.body.documento;
    var estudianteReq = req.body.estudiante;
    var correoReq = req.body.correo;
    var passwordReq = req.body.password;
    var usuario = {
        nombres: nombresReq,
        apellidos: apellidosReq,
        documento: documentoReq,
        estudiante: estudianteReq,
        correo: correoReq,
        password: bcryptjs_1.default.hashSync(passwordReq, 10)
    };
    //Grabar USUARIO en BD
    usuario_1.Usuario.create(usuario).then(function (usuarioDB) {
        res.json({
            ok: true,
            usuario: usuarioDB
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
//Obtener usuario
usuarioRutas.get('/mostrar', function (req, res) {
    var documento = req.usuario._id;
    usuario_1.Usuario.findOne({ _id: documento }, function (err, usuarioDB) {
        if (err)
            throw err;
        if (!usuarioDB) {
            return res.json({
                ok: false,
                mensaje: 'No se ha encontrado el usuario'
            });
        }
        else {
            return res.json({
                "ok": true,
                "usuario": usuarioDB
            });
        }
    });
});
exports.default = usuarioRutas;
