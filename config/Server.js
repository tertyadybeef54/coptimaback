"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const ConnectionDB_1 = __importDefault(require("./ConnectionDB"));
//import seguridad from "../middleware/Security";
const PerfilRuta_1 = __importDefault(require("../route/PerfilRuta"));
const UsuarioRuta_1 = __importDefault(require("../route/UsuarioRuta"));
const UsuarioPrivadoRuta_1 = __importDefault(require("../route/UsuarioPrivadoRuta"));
const ProductRoute_1 = __importDefault(require("../route/ProductRoute"));
// Import de las rutas
// ****************************************************
class Servidor {
    constructor() {
        dotenv_1.default.config({ path: "variables.env" });
        (0, ConnectionDB_1.default)();
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set("PORT", process.env.PORT);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        // Parte pública
        this.app.use("/api/publica/usuario", UsuarioRuta_1.default);
        this.app.use("/api/privada/product", ProductRoute_1.default);
        // Parte privada
        this.app.use("/api/privada/perfil", PerfilRuta_1.default);
        this.app.use("/api/privada/usuario", UsuarioPrivadoRuta_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("servidor funcionando en el puerto: ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
