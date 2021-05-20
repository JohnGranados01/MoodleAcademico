"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var materiaSchema = new mongoose_2.default.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
});
exports.Materia = mongoose_1.model('Materia', materiaSchema);
