import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Server from './clases/server';
import express from 'express';

import usuarioRutas from './rutas/estudianteRutas';
import authRoute from './rutas/authRoutes';
import profeRoutes from './rutas/profeRoutes';
import materiaRutas from './rutas/materiaRutas';
import tareaRutas from './rutas/tareaRutas';

import multer from 'multer';
import path from 'path';

const server = new Server();
const config = require("./config");

//Body parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//Middlewares
server.app.use(express.json());
server.app.use(express.urlencoded({extended:false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname,`public/uploads/`),
    filename: (req,file,cb) => {
        cb(null, (new Date().getTime()) + path.extname(file.originalname));
    }
})
server.app.use(multer({storage}).single("file"));


//Cors
server.app.use((cors({ origin: true, credentials: true })));

//Rutas
server.app.use('/',authRoute)
server.app.use('/estudiante',usuarioRutas);
server.app.use('/profe',profeRoutes);
server.app.use('/materia',materiaRutas);
server.app.use('/tarea',tareaRutas);
    //Public
        server.app.use('/',express.static(path.join(__dirname,'public'))).get('/archivo/:archivoName', function(req,res){
            let archivoName : string = req.params.archivoName;
            res.sendFile(path.join(__dirname,`public/uploads/${archivoName}`));
        },);

//Conectar BD
mongoose.connect(
    config.MONGO,
    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true, 
        useFindAndModify:false
    },
    (err) => {
        if(err) throw "error BDDDDDDD";
        console.log("Base de datos funcionando");
    }
)

//Levantar servidor
server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`)
})