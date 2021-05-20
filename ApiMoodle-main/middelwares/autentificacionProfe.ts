import {Response, NextFunction} from 'express';
import Token from '../clases/tokenProfe';

export const verificarTokenProfe = (req: any, res: Response, next: NextFunction)=>{
    const adminToken = req.get('miToken') || '';

    Token.comprobarToken(adminToken).then((decoded: any) => {
        req.usuario = decoded.usuario;
        next();
    }).catch(err => {
        res.json({
            ok: false,
            mensaje: 'Token inválido',
            err
        });
    });
}