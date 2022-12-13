"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductScheme = new mongoose_1.Schema({
    nameProduct: { type: String, required: true, trim: true },
    priceProduct: { type: Number, required: true },
    dateUpdateProduct: { type: Date, default: Date.now() },
    presentationProduct: { type: String, required: true, trim: true },
    addressProduct: { type: String, required: true, trim: true },
    nameStore: { type: String, required: true, trim: true },
    stateProduct: { type: Number, enum: [1, 2, 3, 4], default: 1 },
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Product", ProductScheme, "Product");
