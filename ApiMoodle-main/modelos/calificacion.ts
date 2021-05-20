import {Schema, model, Document} from 'mongoose';

import mongoose from 'mongoose';

const calificacionSchema = new mongoose.Schema<ICalificacion>({
    calificacion: {
        type: Number,
        required: [true, 'La calificación es obligatoria']
    },
    idEstudiante: {
        type:String,
        required: [true, "El idEstudiante es obligatorio"]
    },
    idMateria: {
        type:String,
        required: [true, "El idMateria es obligatoria"]
    }
});

interface ICalificacion extends Document{
    calificacion: number;
    idEstudiante: string;
    idMateria: string;
}

export const Calificacion = model<ICalificacion>('Calificacion',calificacionSchema);