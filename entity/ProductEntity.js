"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductEntity {
    constructor(nom, pri, dat, pre, add, nam, est) {
        this.nameProduct = nom;
        this.priceProduct = pri;
        this.dateUpdateProduct = dat;
        this.presentationProduct = pre;
        this.addressProduct = add;
        this.nameStore = nam;
        this.stateProduct = est;
    }
}
exports.default = ProductEntity;
