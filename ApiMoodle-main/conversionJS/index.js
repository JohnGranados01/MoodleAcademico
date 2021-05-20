"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var server_1 = __importDefault(require("./clases/server"));
var express_1 = __importDefault(require("express"));
var estudianteRutas_1 = __importDefault(require("./rutas/estudianteRutas"));
var authRoutes_1 = __importDefault(require("./rutas/authRoutes"));
var profeRoutes_1 = __importDefault(require("./rutas/profeRoutes"));
var materiaRutas_1 = __importDefault(require("./rutas/materiaRutas"));
var tareaRutas_1 = __importDefault(require("./rutas/tareaRutas"));
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var server = new server_1.default();
var config = require("./config");
//Body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Middlewares
server.app.use(express_1.default.json());
server.app.use(express_1.default.urlencoded({ extended: false }));
var storage = multer_1.default.diskStorage({
    destination: path_1.default.join(__dirname, "public/uploads/"),
    filename: function (req, file, cb) {
        cb(null, (new Date().getTime()) + path_1.default.extname(file.originalname));
    }
});
server.app.use(multer_1.default({ storage: storage }).single("file"));
//Cors
server.app.use((cors_1.default({ origin: true, credentials: true })));
//Rutas
server.app.use('/', authRoutes_1.default);
server.app.use('/estudiante', estudianteRutas_1.default);
server.app.use('/profe', profeRoutes_1.default);
server.app.use('/materia', materiaRutas_1.default);
server.app.use('/tarea', tareaRutas_1.default);
//Public
server.app.use('/', express_1.default.static(path_1.default.join(__dirname, 'public'))).get('/archivo/:archivoName', function (req, res) {
    var archivoName = req.params.archivoName;
    res.sendFile(path_1.default.join(__dirname, "public/uploads/" + archivoName));
});
//Conectar BD
mongoose_1.default.connect(config.MONGO, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, function (err) {
    if (err)
        throw "error BDDDDDDD";
    console.log("Base de datos funcionando");
});
//Levantar servidor
server.start(function () {
    console.log("Servidor corriendo en el puerto " + server.port);
});
