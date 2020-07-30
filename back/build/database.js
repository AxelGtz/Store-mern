"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const opts = {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
};
exports.default = mongoose_1.connect("mongodb+srv://axeldev:Axel2064@cellphonestore-ozbtb.mongodb.net/<dbname>?retryWrites=true&w=majority", opts);
const Connection = mongoose_1.connection;
Connection.on('open', () => {
    console.log('mongodb funcionando....');
});
Connection.once('err', (err) => console.log(err));
