import mongoose, {Document} from 'mongoose';
import bcrypt from 'bcrypt';

interface Iprod extends Document {
  name : string,
  cantidad : number,
  price : number
}
interface Iuser extends Document {
  name : string,
  email : string,
  password : string,
  image : string,
  trolley : [Iprod],
  roles : ["user", "admin"]
}
const userSchema = new mongoose.Schema({
   name : {required:true, type:String},
   email : {required: true, type:String},
   password : {required : true, type:String},
   image : {required: true, type:String},
   roles : {required:true , type: String , default:"user",
   enum:["user","admin"]
  }
});
userSchema.pre<Iuser>('save', function (next) {
     const user = this;

     if(!user.isModified('password')) return next();
      
     bcrypt.genSalt(10, (err,salt) => {
         if(err) return next(err);

         bcrypt.hash(user.password,salt, (err,hash)=> {
             if(err) return next(err);
            user.password = hash;
             return next();
         })
     })
});
const user = mongoose.model<Iuser>('user', userSchema)

export {user,Iuser};