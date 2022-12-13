"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controller/ProductController"));
class ProductRoute {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaAPI.post("/create", ProductController_1.default.crear);
        this.rutaAPI.get("/read/:codigo", ProductController_1.default.consultaUna);
        this.rutaAPI.put("/update/:codigo", ProductController_1.default.actualizar);
        this.rutaAPI.delete("/delete/:codigo", ProductController_1.default.eliminar);
        this.rutaAPI.get("/all", ProductController_1.default.consultarProducts);
    }
}
const productRuta = new ProductRoute();
exports.default = productRuta.rutaAPI;
