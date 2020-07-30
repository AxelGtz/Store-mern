"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.default.Schema({
    name: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    image: { required: true, type: String },
    trolley: { required: true, type: Array },
    roles: { required: true, type: String, default: "user",
        enum: ["user", "admind"]
    }
});
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt_1.default.genSalt(10, (err, salt) => {
        if (err)
            return next(err);
        bcrypt_1.default.hash(user.password, salt, (err, hash) => {
            if (err)
                return next(err);
            user.password = hash;
            return next();
        });
    });
});
const user = mongoose_1.default.model('user', userSchema);
exports.user = user;
