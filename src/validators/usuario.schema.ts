import Joi from 'joi';

export const insertarUsuarioSchema = Joi.object({

    nombres: Joi.string()
        .min(3)
        .max(100)
        .required(),

    apellidoPaterno: Joi.string()
        .min(3)
        .max(50)
        .required(),

    apellidoMaterno: Joi.string()
        .min(3)
        .max(50)
        .required(),

    fechaNacimiento: Joi.date()
        .less('now')
        .optional(),

    tipoDocumento: Joi.string()
        .min(3)
        .max(20)
        .required(),

    numeroDocumento: Joi.string()
        .min(8)
        .max(15)
        .required()
        .pattern(new RegExp('^[0-9]{8,15}$')),

    telefono: Joi.string()
        .min(9)
        .max(20)
        .optional(),

    direccion: Joi.string()
        .min(3)
        .max(500)
        .optional(),

    correo: Joi.string()
        .email()
        .min(3)
        .max(100)
        .required(),

    clave: Joi.string()
        .min(6)
        .max(20)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    rol: Joi.object({
        idRol: Joi.number()
            .integer()
            .required()
    }).required()


});


export const actualizarUsuarioSchema = Joi.object({

    nombres: Joi.string()
        .min(3)
        .max(100)
        .required(),

    apellidoPaterno: Joi.string()
        .min(3)
        .max(50)
        .required(),

    apellidoMaterno: Joi.string()
        .min(3)
        .max(50)
        .required(),

    fechaNacimiento: Joi.date()
        .less('now')
        .optional(),

    tipoDocumento: Joi.string()
        .min(3)
        .max(20)
        .required(),

    numeroDocumento: Joi.string()
        .min(8)
        .max(15)
        .required()
        .pattern(new RegExp('^[0-9]{8,15}$')),

    telefono: Joi.string()
        .min(9)
        .max(20)
        .optional(),

    direccion: Joi.string()
        .min(3)
        .max(500)
        .optional(),

    correo: Joi.string()
        .email()
        .min(3)
        .max(100)
        .required(),

    clave: Joi.string()
        .min(6)
        .max(20)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

});