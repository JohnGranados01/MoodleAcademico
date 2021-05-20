"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var calificacion_1 = require("../modelos/calificacion");
var calificacionRoutes = express_1.Router();
//Crear Calificacion
calificacionRoutes.post('/crear', function (req, res) {
    var calificacionReq = req.body.calificacion;
    var idEstudianteReq = req.body.idEstudiante;
    var idMateriaReq = req.body.idMateria;
    var calificacion = {
        calificacion: calificacionReq,
        idEstudiante: idEstudianteReq,
        idMateria: idMateriaReq,
    };
    //Grabar Calificacion en BD
    calificacion_1.Calificacion.create(calificacion).then(function (calificacionDB) {
        res.json({
            ok: true,
            calificacion: calificacionDB
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
//Ver calificaciones
calificacionRoutes.get('/todos', function (req, res) {
    calificacion_1.Calificacion.find({ specialty: req.query.type }).then(function (calificacion) {
        res.json(calificacion);
    }).catch(function (error) {
        console.log("Error al mostrar las calificaciones" + error);
    });
});
exports.default = calificacionRoutes;
