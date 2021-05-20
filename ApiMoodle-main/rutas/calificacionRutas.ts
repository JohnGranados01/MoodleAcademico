import { Router, Request, Response} from "express";
import {Calificacion} from '../modelos/calificacion';

import { verificarTokenProfe } from "../middelwares/autentificacionProfe"; 

const calificacionRoutes = Router();

//Crear Calificacion
calificacionRoutes.post('/crear',(req: Request,res: Response)=>{
    const calificacionReq: number = req.body.calificacion;
    const idEstudianteReq: string = req.body.idEstudiante;
    const idMateriaReq: string = req.body.idMateria;

    const calificacion = {
        calificacion: calificacionReq,
        idEstudiante: idEstudianteReq,
        idMateria: idMateriaReq,
    };
    
//Grabar Calificacion en BD
Calificacion.create(calificacion).then((calificacionDB: any) => {
        res.json({
            ok: true,
            calificacion:calificacionDB
        })
    }).catch((err: any) => {
        res.json({
            ok: false,
            err
        })
    })
});

//Ver calificaciones
calificacionRoutes.get('/todos',(req: Request,res: Response)=>{
    Calificacion.find({specialty: req.query.type}).then(function(calificacion: any) {
        res.json(calificacion);
    }).catch(function(error: string){
        console.log("Error al mostrar las calificaciones" + error);
    });
});

export default calificacionRoutes;