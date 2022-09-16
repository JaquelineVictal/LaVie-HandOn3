const { validate, Joi } = require('express-validation')

module.exports = validate({
    params: Joi.object({
        id_Pacientes: Joi.number().required()
      }),

    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        dataNascimento: Joi.date().required()
    })
})