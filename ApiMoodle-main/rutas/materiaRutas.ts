import { Router, Request, Response} from "express";
import {Materia} from '../modelos/materia';

const materiaRutas = Router();

//Crear Usuario
materiaRutas.post('/crear',(req: Request,res: Response)=>{
    const nombreReq: string = req.body.nombre;

    const materia = {
        nombre: nombreReq,
    };
    
//Grabar USUARIO en BD
    Materia.create(materia).then((materiaDB: any) => {
        res.json({
            ok: true,
            materia: materiaDB
        })
    }).catch((err: any) => {
        res.json({
            ok: false,
            err
        })
    })
});

//Ver materias
materiaRutas.get('/todos',(req: Request,res: Response)=>{
    Materia.find({specialty: req.query.type}).then(function(materia: any) {
        res.json(materia);
    }).catch(function(error: string){
        console.log("Error al mostrar las materias" + error);
    });
});

export default materiaRutas;