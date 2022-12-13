"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductDao_1 = __importDefault(require("../dao/ProductDao"));
class ProductController extends ProductDao_1.default {
    crear(req, res) {
        ProductController.crearProduct(req.body, res);
    }
    consultarProducts(req, res) {
        ProductController.obtenerProducts(res);
    }
    consultaUna(req, res) {
        ProductController.obtenerUnProduct(req.params.codigo, res);
    }
    eliminar(req, res) {
        ProductController.eliminarProduct(req.params.codigo, res);
    }
    actualizar(req, res) {
        ProductController.actualizarProduct(req.params.codigo, req.body, res);
    }
}
const productController = new ProductController();
exports.default = productController;
