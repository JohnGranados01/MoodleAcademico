"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_1 = require("../modelos/usuario");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var autentificacionProfe_1 = require("../middelwares/autentificacionProfe");
var adminRoutes = express_1.Router();
//Ver usuarios
adminRoutes.get('/todos', function (req, res) {
    usuario_1.Usuario.find({ specialty: req.query.type }).then(function (usuario) {
        res.json(usuario);
    }).catch(function (error) {
        console.log("Error al mostrar los usuarios" + error);
    });
});
//Crear Admin
adminRoutes.post('/crear', function (req, res) {
    var nombresReq = req.body.nombres;
    var apellidosReq = req.body.apellidos;
    var documentoReq = req.body.documento;
    var rolReq = req.body.rol;
    var telefonoReq = req.body.telefono;
    var ciudadReq = req.body.ciudad;
    var direccionReq = req.body.direccion;
    var correoReq = req.body.correo;
    var passwordReq = req.body.password;
    var usuario = {
        nombres: nombresReq,
        apellidos: apellidosReq,
        documento: documentoReq,
        rol: rolReq,
        telefono: telefonoReq,
        ciudad: ciudadReq,
        direccion: direccionReq,
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
//Obtener admin
adminRoutes.get('/mostrar', autentificacionProfe_1.verificarTokenProfe, function (req, res) {
    var id = req.usuario._id;
    usuario_1.Usuario.findOne({ _id: id }, function (err, usuarioDB) {
        if (err)
            throw err;
        if (!usuarioDB) {
            return res.json({
                ok: false,
                mensaje: 'No se ha encontrado el admin'
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
exports.default = adminRoutes;
