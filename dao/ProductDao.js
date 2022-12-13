"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductScheme_1 = __importDefault(require("../scheme/ProductScheme"));
class ProductDao {
    // Crear product
    // ************************************************************************************
    static crearProduct(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            delete parametros._id;
            delete parametros.datosUsuario;
            console.log(parametros);
            const existe = yield ProductScheme_1.default.findOne(parametros);
            if (existe) {
                res.status(400).json({ respuesta: "El producto ya existe" });
            }
            else {
                const objProduct = new ProductScheme_1.default(parametros);
                objProduct.save((miError, objeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "Error al crear la product" });
                    }
                    else {
                        res.status(200).json({ id: objeto._id });
                    }
                });
            }
        });
    }
    // ************************************************************************************
    // Obtener todos los productos ordenados de forma ascendente por nombre
    // ************************************************************************************
    static obtenerProducts(res) {
        return __awaiter(this, void 0, void 0, function* () {
            ProductScheme_1.default.find().sort({ nameProduct: 1 })
                .exec((miError, objeto) => {
                if (miError) {
                    res.status(400).json({ respuesta: "Error en la consulta" });
                }
                else {
                    res.status(200).json(objeto);
                }
            });
        });
    }
    // ************************************************************************************
    // Obtener un producto 
    // ************************************************************************************
    static obtenerUnProduct(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonCItaID = { _id: identificador };
            ProductScheme_1.default.findOne(jsonCItaID)
                .exec((miError, objeto) => {
                if (miError) {
                    res.status(400).json({ respuesta: "Error en la consulta" });
                }
                else {
                    res.status(200).json(objeto);
                }
            });
        });
    }
    // ************************************************************************************
    // ************************************************************************************
    // ************************************************************************************
    // Eliminar usuario por identificador
    // ************************************************************************************
    static eliminarProduct(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield ProductScheme_1.default.findById(identificador).exec();
            if (existe) {
                ProductScheme_1.default.findByIdAndDelete(identificador, (miError, objeto) => {
                    // UsuarioEsquema.deleteOne({ _id: identificador }, (miError: any, objeto: any) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "Error al eliminar el producto" });
                    }
                    else {
                        res.status(200).json({ eliminado: objeto });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "El producto NO existe" });
            }
        });
    }
    // ************************************************************************************
    // actualizar producto por _id
    // ************************************************************************************
    static actualizarProduct(identificador, jsonExterno, res) {
        return __awaiter(this, void 0, void 0, function* () {
            delete jsonExterno._id;
            delete jsonExterno.datosUsuario;
            const existe = yield ProductScheme_1.default.findById(identificador).exec();
            if (existe) {
                ProductScheme_1.default.findByIdAndUpdate({ _id: identificador }, { $set: jsonExterno }, (miError, objeto) => {
                    if (miError) {
                        console.log(miError);
                        res.status(400).json({ respuesta: "Error al actualizar el producto, verificar la información" });
                    }
                    else {
                        res.status(200).json({ antiguo: objeto, nuevo: jsonExterno });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "El producto NO existe" });
            }
        });
    }
}
exports.default = ProductDao;
