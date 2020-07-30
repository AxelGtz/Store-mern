import express from 'express';
import {newProduct,getProducts,getProduct,updateProduct,deleteProduct} from '../Controllers/Products';
import passport from 'passport'

const productRouter = express.Router();

const passportOPt = passport.authenticate('jwt',{session:false});
const prod = 'product'

productRouter.post(`/${prod}/newproduct`,passportOPt, newProduct);
productRouter.get(`/${prod}/getproducts`,passportOPt,getProducts);
productRouter.get(`/${prod}/getproduct/:id`,passportOPt,getProduct);
productRouter.put(`/${prod}/updateproduct/:id`,passportOPt,updateProduct);
productRouter.delete(`/${prod}/deleteproduct/:id`,passportOPt, deleteProduct);
export default productRouter;