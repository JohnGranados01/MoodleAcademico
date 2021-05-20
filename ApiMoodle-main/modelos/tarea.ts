import {Schema, model, Document} from 'mongoose';

import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema<ITarea>({
    titulo: {
        type:String,
        required: [true, 'El título es obligatorio']
    },
    descripcion: {
        type:String,
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

interface ITarea extends Document{
    titulo: string;
    descripcion: string;
    idMateria: string;
    idEstudiante: string;
    archivo: {};
}

export const Tarea = model<ITarea>('Tarea',tareaSchema);