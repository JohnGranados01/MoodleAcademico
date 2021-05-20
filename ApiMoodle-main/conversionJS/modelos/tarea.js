"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var tareaSchema = new mongoose_2.default.Schema({
    titulo: {
        type: String,
        required: [true, 'El título es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, "La descripcion es obligatoria"]
    },
    idMateria: {
        type: String,
        required: [true, "El id de materia es obligatorio"]
    },
    idEstudiante: {
        type: String,
        required: [true, "El idEstudiante es obligatorio"]
    },
    archivo: {
        fileName: String,
        url: String,
    }
});
exports.Tarea = mongoose_1.model('Tarea', tareaSchema);
