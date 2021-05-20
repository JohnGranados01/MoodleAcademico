import {Schema, model, Document} from 'mongoose';

import mongoose from 'mongoose';

const materiaSchema = new mongoose.Schema<IMateria>({
    nombre: {
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
});

interface IMateria extends Document{
    nombre: string;
}

export const Materia = model<IMateria>('Materia',materiaSchema);