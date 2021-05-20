"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var materia_1 = require("../modelos/materia");
var materiaRutas = express_1.Router();
//Crear Usuario
materiaRutas.post('/crear', function (req, res) {
    var nombreReq = req.body.nombre;
    var materia = {
        nombre: nombreReq,
    };
    //Grabar USUARIO en BD
    materia_1.Materia.create(materia).then(function (materiaDB) {
        res.json({
            ok: true,
            materia: materiaDB
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
//Ver materias
materiaRutas.get('/todos', function (req, res) {
    materia_1.Materia.find({ specialty: req.query.type }).then(function (materia) {
        res.json(materia);
    }).catch(function (error) {
        console.log("Error al mostrar las materias" + error);
    });
});
exports.default = materiaRutas;
