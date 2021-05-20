"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var mongoose_1 = require("mongoose");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var mongoose_2 = __importDefault(require("mongoose"));
var usuarioSchema = new mongoose_2.default.Schema({
    nombres: {
        type: String,
        required: [true, 'Tu nombre es obligatorio']
    },
    apellidos: {
        type: String,
        required: [true, "Tu apellido es obligatorio"]
    },
    documento: {
        type: String,
        unique: true,
        required: [true, "Tu número de documento es obligatorio"]
    },
    estudiante: {
        type: Boolean,
        required: [true, "Si es estudiante es obligatorio"],
        default: true,
    },
    correo: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Tu correo es obligatorio"]
    },
    password: {
        type: String,
        required: [true, "Tu contraseña es obligatoria"]
    }
});
usuarioSchema.method("compararContrasena", function (password) {
    if (password === void 0) { password = ''; }
    if (bcryptjs_1.default.compareSync(password, this.password)) {
        return true;
    }
    else {
        return false;
    }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
