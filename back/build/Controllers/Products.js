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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.getProducts = exports.newProduct = void 0;
const product_1 = require("../Models/product");
exports.newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, stock, price, priceSell, photo, description } = req.body;
    try {
        if (!name || !stock || !price || !priceSell || !photo || !description) {
            return res.status(309).send({
                status: "failed",
                message: "faltan datos por enviar...",
            });
        }
        const existUser = yield product_1.product.findOne({ name });
        if (existUser)
            return res.status(309).send({
                status: "failed",
                message: "producto ya registrado",
            });
        yield new product_1.product({
            name,
            stock,
            price,
            priceSell,
            photo,
            description
        }).save((err) => {
            if (err)
                return res.status(309).send({
                    status: "failed",
                    message: "error al guardar",
                });
        });
        return res.status(200).send({
            status: "success",
            message: "created account succesful",
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_1.product.find({}, (err, prods) => {
            if (err)
                return res.status(309).send({
                    status: 'failed',
                    message: 'error al traer los productos'
                });
            return res.status(200).send({
                prods
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Product = yield product_1.product.findOne({ _id: id }, (err) => {
            if (err)
                return res.status(309).send({
                    status: 'failed',
                    message: 'error al traer el producto'
                });
        });
        if (!Product)
            return res.status(309).send({
                status: 'failed',
                message: 'el id no se encuentra en la base de datos'
            });
        return res.status(200).send({
            status: 'success',
            Product
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const existUser = yield product_1.product.findById({ _id: id });
    try {
        if (!existUser)
            return res.status(309).send({
                status: 'failed',
                message: 'el producto no esta en la base de datos...'
            });
        yield existUser.updateOne(req.body, (err) => {
            if (err)
                res.status(309).send({
                    status: 'failed',
                    message: 'error al actualizar...'
                });
            return res.status(200).send({
                status: 'success',
                message: 'producto actualizado correctamente!'
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield product_1.product.findByIdAndDelete({ _id: id }, (err, Product) => {
            if (err)
                res.status(309).send({
                    status: 'failed',
                    message: 'error al eliminar el producto..'
                });
            if (!Product) {
                return res.status(309).send({
                    status: 'failed',
                    message: 'el producto no se encuentra en la base de datos...'
                });
            }
            return res.status(200).send({
                succ: 'el producto fue eliminado correctamente..',
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
