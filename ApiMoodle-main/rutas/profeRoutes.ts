import { Router, Request, Response} from "express";
import {Usuario} from '../modelos/usuario';

import bcrypt from 'bcryptjs';
import { verificarTokenProfe } from "../middelwares/autentificacionProfe"; 

const adminRoutes = Router();

//Ver usuarios
adminRoutes.get('/todos',(req: Request,res: Response)=>{
    Usuario.find({specialty: req.query.type}).then(function(usuario:any) {
        res.json(usuario);
    }).catch(function(error:any){
        console.log("Error al mostrar los usuarios" + error);
    });
});


//Crear Admin
adminRoutes.post('/crear',(req: Request,res: Response)=>{
    const nombresReq: string = req.body.nombres;
    const apellidosReq: string = req.body.apellidos;
    const documentoReq: string = req.body.documento;
    const rolReq: string = req.body.rol;
    const telefonoReq : string = req.body.telefono;
    const ciudadReq : string = req.body.ciudad;
    const direccionReq : string = req.body.direccion;
    const correoReq : string = req.body.correo;
    const passwordReq : string = req.body.password;

    const usuario = {
        nombres: nombresReq,
        apellidos: apellidosReq,
        documento: documentoReq,
        rol: rolReq,
        telefono: telefonoReq,
        ciudad: ciudadReq,
        direccion: direccionReq,
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


//Obtener admin
adminRoutes.get('/mostrar', verificarTokenProfe, (req: any, res: Response) => {
    var id = req.usuario._id;
    Usuario.findOne({_id: id},(err: any,usuarioDB: any) => {
        if(err) throw err;
        if(!usuarioDB){
            return res.json({
                ok: false,
                mensaje: 'No se ha encontrado el admin'
            });
        }else{
            return res.json({
                "ok": true,
                "usuario": usuarioDB
            });
        }
    });
});
export default adminRoutes;