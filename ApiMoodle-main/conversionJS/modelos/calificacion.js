"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calificacion = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var calificacionSchema = new mongoose_2.default.Schema({
    calificacion: {
        type: Number,
        required: [true, 'La calificación es obligatoria']
    },
    idEstudiante: {
        type: String,
        required: [true, "El idEstudiante es obligatorio"]
    },
    idMateria: {
        type: String,
        required: [true, "El idMateria es obligatoria"]
    }
});
exports.Calificacion = mongoose_1.model('Calificacion', calificacionSchema);
