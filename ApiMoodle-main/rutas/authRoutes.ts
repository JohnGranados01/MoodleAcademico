import { Router, Request, Response} from "express";
import {Usuario} from '../modelos/usuario';

import TokenEstudiante from "../clases/tokenEstudiante";
import TokenProfe from "../clases/tokenProfe";

const authRoute = Router();


//Login
authRoute.post('/entrar',(req: Request,res: Response)=>{
    const body = req.body;
    Usuario.findOne({correo: body.correo},(err:any,usuarioDB:any) => {
        if(err) throw err;
        if(!usuarioDB){
            return res.json({
                ok: false,
                token: "Parece que las credenciales son incorrectas"
            });
        }
        if(usuarioDB.compararContrasena(body.password)){
            let miToken:string = "";
            if(usuarioDB.estudiante){
               miToken = TokenEstudiante.getToken({
                    _id: usuarioDB._id,
                    correo: usuarioDB.correo,
                    password: usuarioDB.password
                });
                res.json({
                    ok: true,
                    estudiante: usuarioDB.estudiante,
                    token: miToken
                });
            }else{
                miToken = TokenProfe.getToken({
                    _id: usuarioDB._id,
                    correo: usuarioDB.correo,
                    password: usuarioDB.password
                });
                res.json({
                    ok: true,
                    estudiante: usuarioDB.estudiante,
                    token: miToken
                });
            }
        }else{
            res.json({
                ok: false,
                token: "Parece que las credenciales son incorrectas"
            })
        }
    });
});

export default authRoute;