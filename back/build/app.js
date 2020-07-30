"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./Routes/user.routes"));
const product_routes_1 = __importDefault(require("./Routes/product.routes"));
const passport_1 = __importDefault(require("passport"));
const Passport_1 = __importDefault(require("./Middlewares/Passport"));
const path_1 = __importDefault(require("path"));
const Cellphone = '/cellphone';
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(passport_1.default.initialize());
passport_1.default.use(Passport_1.default);
app.use(Cellphone, user_routes_1.default);
app.use(Cellphone, product_routes_1.default);
//store images
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
app.set('port', 4000);
exports.default = app;
