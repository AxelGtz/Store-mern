import {Request,Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {user,Iuser} from '../Models/user';
import path from 'path';
import fs from 'fs-extra';

export const signUp = async (req : Request, res : Response)  => {
    const {name , email, password} = req.body;
    const trolley : object = [];
    const image  = 'null';
    if(!name || !email || !password  ) {
        return res.status(309).send({
            status : 'failed',
            message : 'faltan datos por enviar...'
        })
    }
    //const image = req.file.path;
    
    const existUser = await user.findOne({email});

    if(existUser){
     //await fs.unlink(path.resolve(image))
         
    return res.status(309).send({
        status : 'failed',
        message: 'el email ya esta en uso.'
    })
   }

   await new user({
        name,email,password,image,trolley
    }).save(async(err,user) => {
        if(err){
       //     await fs.unlink(path.resolve(image));
            return res.status(309).send({
            status : 'failed',
            message : 'error al guardar'
        })};

        if(!user) {
        //await fs.unlink(path.resolve(image));  
        return res.status(309).send({
            status : 'failed',
            message : 'el usuario no se guardo..'
        })}

        return res.status(200).send({
            status : 'success',
            message: 'created account succesful'
        })
    })
}
const sign = (user: any) =>  {
    return jwt.sign({user}, 'secreto', {
       expiresIn:60*60*60
    })
}
export const signIn = async  (req : Request, res : Response) : Promise<Response> => {
    const {email,password} = req.body;

    if(!email || !password) return res.status(309).send({
        status : "failed",
        message : "faltan datos por enviar"
    })

    const existUser = await user.findOne({email});

    if(!existUser) return res.status(309).send({
        status : 'failed',
        message : 'password/email error'
    })

   const passwordCorrect = await bcrypt.compare(password, existUser.password);

   if(!passwordCorrect) return res.status(309).send({
    status : 'failed',
    message : 'password/email error'
   });

   const token = sign(existUser);
   return res.status(200).send({
        token
    });
}
export const getUser = async (req:Request , res : Response) => {
    try {
     const {id}= req.params;

     const User = await user.findOne({ _id : id}, (err) => {
         if(err) return res.status(309).send({
             status : 'failed',
             message :'error al traer el producto'
         })
     });  

     if(!User) return res.status(309).send({
        status : 'failed',
        message : 'el id no se encuentra en la base de datos'
     })

     return res.status(200).send({
       status : 'success',
       User
     })
    } catch (error) {
        console.log(error)
    }
};
export const getUsers = async (req:Request , res : Response) : Promise<Response> => {
    const users = await user.find({}, (err, users) => {
        if(err) return res.status(309).send({
            message: "error"            
        })
        if (!users) return res.status(404).send({
            status : 'failed',
            message : 'no hay usuariaos en la base de datos...'
        })
    });
    return res.status(200).send({
      status : 'success',
      users
    })
}
export const deleteUser = async (req:Request, res : Response) => {
    const {id} = req.params;
  
    try {
     await user.findByIdAndDelete({_id : id} , async(err,User) => {
        if(err) res.status(309).send({
          status : 'failed',
          message: 'error al eliminar el producto..' 
         })
         
      if(!User) {
        return res.status(309).send({
          status : 'failed',
          message : 'el usuario no se encuentra en la base de datos...'
        })
      }

      if(User) {
         await fs.unlink(path.resolve(User.image))
      }
  
     return res.status(200).send({
       succ : 'el usuario fue eliminado correctamente..',
     })            
      })
  
    } catch (error) {
      console.log(error)
    } 
  };
export const whomy = async (req : Request, res: Response) => {
    const {_id} : any = req.user;
    await user.findById({_id : _id}, (err,user) =>{
    
        if(err) return res.status(404).send({
            status : 'failed',
            message : 'hay un erro xDD'
        })
        if (!user) return res.status(404).send({
            status : 'failed',
            message : 'no hay user en el header'
        })
        const {roles,email,name,image,trolley} = user;

        const User ={name,email,image,trolley,roles} ;
        res.status(200).send({
            status : 'success',
            User
          })
    });
    
 }

  