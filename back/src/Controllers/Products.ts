import { Request, Response } from "express";
import { product } from "../Models/product";

export const newProduct = async (req: Request, res: Response) => {
  const { name, stock, price, priceSell, photo, description} = req.body;
  try {
    if (!name || !stock || !price || !priceSell || !photo  || !description) {
      return res.status(309).send({
        status: "failed",
        message: "faltan datos por enviar...",
      });
    }

    const existUser = await product.findOne({ name });

    if (existUser)
      return res.status(309).send({
        status: "failed",
        message: "producto ya registrado",
      });

    await new product({
      name,
      stock,
      price,
      priceSell,
      photo,
      description
    }).save((err) => {
      if (err)
        return res.status(309).send({
          status: "failed",
          message: "error al guardar",
        });
    });

    return res.status(200).send({
      status: "success",
      message: "created account succesful",
    });
  } catch (error) {
    console.log(error);
  }
};
export const getProducts = async (req:Request , res : Response) => {
  console.log('req', req.user); 
  try {
    await product.find({}, (err,prods) => {
        if(err) return res.status(309).send({
            status : 'failed',
            message :'error al traer los productos'
        })
        return res.status(200).send({
            prods
        })
    })  
   } catch (error) {
       console.log(error)
   }
};
export const getProduct = async (req:Request , res : Response) => {
    try {
     const {id}= req.params;

     const Product = await product.findOne({ _id : id}, (err) => {
         if(err) return res.status(309).send({
             status : 'failed',
             message :'error al traer el producto'
         })
     });  

     if(!Product) return res.status(309).send({
        status : 'failed',
        message : 'el id no se encuentra en la base de datos'
     })

     return res.status(200).send({
       status : 'success',
       Product
     })
    } catch (error) {
        console.log(error)
    }
};
export const updateProduct = async (req:Request, res : Response) => {
  const {id} = req.params;

  const existUser = await product.findById({_id : id });

  try {
   if(!existUser) return res.status(309).send({
     status : 'failed',
     message: 'el producto no esta en la base de datos...' 
    })
    
   await existUser.updateOne(req.body, (err) => {
      if(err) res.status(309).send({
        status : 'failed',
        message: 'error al actualizar...' 
       })

       return res.status(200).send({
         status : 'success',
         message: 'producto actualizado correctamente!'
       })
    })
  } catch (error) {
    console.log(error)
  } 
};
export const deleteProduct = async (req:Request, res : Response) => {
  const {id} = req.params;

  try {
   await product.findByIdAndDelete({_id : id} ,(err,Product) => {
      if(err) res.status(309).send({
        status : 'failed',
        message: 'error al eliminar el producto..' 
       })
       
    if(!Product) {
      return res.status(309).send({
        status : 'failed',
        message : 'el producto no se encuentra en la base de datos...'
      })
   }

   return res.status(200).send({
     succ : 'el producto fue eliminado correctamente..',
   })            
    })

  } catch (error) {
    console.log(error)
  } 
};
