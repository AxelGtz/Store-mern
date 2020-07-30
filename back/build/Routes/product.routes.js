"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Products_1 = require("../Controllers/Products");
const passport_1 = __importDefault(require("passport"));
const productRouter = express_1.default.Router();
const passportOPt = passport_1.default.authenticate('jwt', { session: false });
const prod = 'product';
productRouter.post(`/${prod}/newproduct`, passportOPt, Products_1.newProduct);
productRouter.get(`/${prod}/getproducts`, passportOPt, Products_1.getProducts);
productRouter.get(`/${prod}/getproduct/:id`, passportOPt, Products_1.getProduct);
productRouter.put(`/${prod}/updateproduct/:id`, passportOPt, Products_1.updateProduct);
productRouter.delete(`/${prod}/deleteproduct/:id`, passportOPt, Products_1.deleteProduct);
exports.default = productRouter;
