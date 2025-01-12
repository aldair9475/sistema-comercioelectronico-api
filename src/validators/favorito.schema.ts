import Joi from 'joi';

export const insertarFavoritoSchema = Joi.object({
    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .positive() 
            .required() 
    }).required(), 

    producto: Joi.object({
        idProducto: Joi.number()
            .integer()
            .positive() 
            .required() 
    }).required() 
});

export const actualizarFavoritoSchema = Joi.object({

    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .positive() 
            .required() 
    }).required(), 

    producto: Joi.object({
        idProducto: Joi.number()
            .integer()
            .positive() 
            .required() 
    }).required() 
});
