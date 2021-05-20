import { Router, Request, Response} from "express";
import {Tarea} from '../modelos/tarea';

const tareaRutas = Router();

//Crear Usuario
tareaRutas.post('/crear',(req: Request,res: Response)=>{
    const tituloReq: string = req.body.titulo;
    const descripcionReq: string = req.body.descripcion;
    const idMateriaReq: string = req.body.idMateria;
    const idEstudianteReq: string = req.body.idEstudiante;

    const file = req.file;

    const tarea = {
        titulo: tituloReq,
        descripcion: descripcionReq,
        idMateria: idMateriaReq,
        idEstudiante: idEstudianteReq,
        archivo: {
            fileName: file.filename,
            url: file.path,
        }
    };
    
//Grabar USUARIO en BD
    Tarea.create(tarea).then((tareaDB: any) => {
        res.json({
            ok: true,
            tarea: tareaDB
        })
    }).catch((err: any) => {
        res.json({
            ok: false,
            err
        })
    })
});

//Ver materias 
tareaRutas.get('/todos',(req: Request,res: Response)=>{
    Tarea.find({specialty: req.query.type}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas" + error);
    });
});


//Mostrar tareas por materia
tareaRutas.get('/:idMateria',(req: Request,res: Response)=>{
    const idMateria = req.params.idMateria;
    Tarea.find({idMateria: idMateria}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas por materia" + error);
    });
});

//Mostrar tareas por estudiante
tareaRutas.get('/:idEstudiante',(req: Request,res: Response)=>{
    const idEstudiante = req.params.idEstudiante;
    Tarea.find({idEstudiante: idEstudiante}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas por estudiante" + error);
    });
});

//Mostrar tareas por estudiante y materia
tareaRutas.get('/:idEstudiante/:idMateria',(req: Request,res: Response)=>{
    const idMateria = req.params.idMateria;
    const idEstudiante = req.params.idEstudiante;
    Tarea.find({idMateria: idMateria,idEstudiante: idEstudiante}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas por estudiante" + error);
    });
});

export default tareaRutas;