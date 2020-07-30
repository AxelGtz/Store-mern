"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: { required: true, type: String },
    photo: { required: true, type: String },
    price: { required: true, type: Number },
    priceSell: { required: true, type: Number },
    stock: { required: true, type: Number },
    description: { required: true, type: String }
});
const product = mongoose_1.default.model('product', productSchema);
exports.product = product;
