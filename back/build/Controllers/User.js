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
exports.getUsers = exports.signIn = exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../Models/user");
exports.signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, image } = req.body;
    const trolley = Array;
    if (!name || !email || !password) {
        return res.status(309).send({
            status: 'failed',
            message: 'faltan datos por enviar...'
        });
    }
    const existUser = yield user_1.user.findOne({ email });
    if (existUser)
        return res.status(309).send({
            status: 'failed',
            message: 'el email ya esta en uso.'
        });
    yield new user_1.user({
        name, email, password, image, trolley
    }).save((err, user) => {
        if (err)
            return res.status(309).send({
                status: 'failed',
                message: 'error al guardar'
            });
    });
    return res.status(200).send({
        status: 'success',
        message: 'created account succesful'
    });
});
const sign = (user) => {
    return jsonwebtoken_1.default.sign({ user }, 'secreto', {
        expiresIn: 60 * 60
    });
};
exports.signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(309).send({
            status: "failed",
            message: "faltan datos por enviar"
        });
    const existUser = yield user_1.user.findOne({ email });
    if (!existUser)
        return res.status(309).send({
            status: 'failed',
            message: 'password/email error'
        });
    const passwordCorrect = yield bcrypt_1.default.compare(password, existUser.password);
    if (!passwordCorrect)
        return res.status(309).send({
            status: 'failed',
            message: 'password/email error'
        });
    const token = sign(existUser);
    return res.status(200).send({
        token
    });
});
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.user.find({}, (err, users) => {
        if (err)
            return res.status(309).send({
                message: "error"
            });
        if (!users)
            return res.status(404).send({
                status: 'failed',
                message: 'no hay usuariaos en la base de datos...'
            });
    });
    return res.status(200).send({
        status: 'success',
        users
    });
});
