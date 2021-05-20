import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcryptjs';

import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema<IUser>({
    nombres: {
        type:String,
        required: [true, 'Tu nombre es obligatorio']
    },
    apellidos: {
        type:String,
        required: [true, "Tu apellido es obligatorio"]
    },
    documento: {
        type:String,
        unique: true,
        required: [true, "Tu número de documento es obligatorio"]
    },
    estudiante: {
        type: Boolean,
        required: [true, "Si es estudiante es obligatorio"],
        default: true,
    },
    correo: {
        type:String,
        unique: true,
        lowercase: true,
        required: [true, "Tu correo es obligatorio"]
    },
    password: {
        type:String,
        required: [true, "Tu contraseña es obligatoria"]
    }
});

usuarioSchema.method("compararContrasena", function(password: string = ''): boolean{
    if(bcrypt.compareSync(password,this.password)){
        return true;
    }else{
        return false;
    }
});

interface IUser extends Document{
    nombres: string;
    apellidos: string;
    documento: string;
    estudiante: boolean;
    correo: string;
    password: string;
    compararContrasena(password:String): boolean;
}

export const Usuario = model<IUser>('Usuario',usuarioSchema);