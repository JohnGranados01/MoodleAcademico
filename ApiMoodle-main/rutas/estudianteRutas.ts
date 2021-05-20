import { Router, Request, Response} from "express";
import {Usuario} from '../modelos/usuario';

import bcrypt from 'bcryptjs';
import Token from "../clases/tokenEstudiante";
import { verificarTokenEstudiante } from "../middelwares/autentificacionEstudiante"; 

const usuarioRutas = Router();

//Crear Usuario
usuarioRutas.post('/crear',(req: Request,res: Response)=>{
    const nombresReq: string = req.body.nombres;
    const apellidosReq: string = req.body.apellidos;
    const documentoReq: string = req.body.documento;
    const estudianteReq: string = req.body.estudiante;
    const correoReq : string = req.body.correo;
    const passwordReq : string = req.body.password;

    const usuario = {
        nombres: nombresReq,
        apellidos: apellidosReq,
        documento: documentoReq,
        estudiante: estudianteReq,
        correo: correoReq,
        password: bcrypt.hashSync(passwordReq,10)
    };
    
//Grabar USUARIO en BD
    Usuario.create(usuario).then((usuarioDB: any) => {
        res.json({
            ok: true,
            usuario:usuarioDB
        })
    }).catch((err: any) => {
        res.json({
            ok: false,
            err
        })
    })
});

//Obtener usuario
usuarioRutas.get('/mostrar', (req: any, res: Response) => {
    var documento = req.usuario._id;
    Usuario.findOne({_id: documento},(err: any,usuarioDB: any) => {
        if(err) throw err;
        if(!usuarioDB){
            return res.json({
                ok: false,
                mensaje: 'No se ha encontrado el usuario'
            });
        }else{
            return res.json({
                "ok": true,
                "usuario": usuarioDB
            });
        }
    });
});

export default usuarioRutas;