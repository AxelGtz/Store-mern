import express, {urlencoded} from 'express';
import cors from 'cors';
import userRouter from './Routes/user.routes';
import productRouter from './Routes/product.routes';
import passport from 'passport';
import middlewarePassport from './Middlewares/Passport';
import path from 'path';

const Cellphone = '/cellphone';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(passport.initialize());
passport.use(middlewarePassport);
app.use(express.json());
app.use(Cellphone,userRouter);
app.use(Cellphone,productRouter);

//store images
app.use('/uploads',express.static(path.resolve('uploads')));
app.set('port', 4000);



export default app;
