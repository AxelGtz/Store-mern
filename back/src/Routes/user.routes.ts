import express from 'express';
import {signUp,whomy,signIn,getUsers,deleteUser,getUser} from '../Controllers/User';
import passport from 'passport'
import multer from '../Middlewares/Multer'

const userRouter = express.Router();
const passportOPt = passport.authenticate('jwt',{session:false});

userRouter.post('/user/signup'/*multer.single('image')*/,signUp);
userRouter.post('/user/signin', signIn);
userRouter.delete('/user/deleteuser/:id', deleteUser);
userRouter.get('/user/getusers', passportOPt ,getUsers);
userRouter.get('/user/getuser/:id', passportOPt,getUser)
userRouter.get('/user/whomy', passportOPt, whomy);
export default userRouter;