"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../Controllers/User");
const passport_1 = __importDefault(require("passport"));
const Multer_1 = __importDefault(require("../Middlewares/Multer"));
const userRouter = express_1.default.Router();
const passportOPt = passport_1.default.authenticate('jwt', { session: false });
userRouter.post('/user/signup', Multer_1.default.single('image'), User_1.signUp);
userRouter.post('/user/signin', User_1.signIn);
userRouter.get('/users/get', passportOPt, User_1.getUsers);
exports.default = userRouter;
