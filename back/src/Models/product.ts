import mongoose, {Document} from 'mongoose';

interface Iproduct extends Document {
  name : string,
  photo : string,
  price : number,
  priceSell : number,
  stock : number,
  description : String,
}

const productSchema = new mongoose.Schema({
   name : {required:true, type:String},
   photo : {required: true, type:String},
   price : {required : true, type:Number},
   priceSell : {required: true, type:Number},
   stock : {required: true, type : Number},
   description : {required:true, type:String}
  });

const product = mongoose.model<Iproduct>('product', productSchema)

export {product,Iproduct};