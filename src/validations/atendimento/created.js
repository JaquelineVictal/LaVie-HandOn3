const { validate, Joi } = require('express-validation')

module.exports = validate({
    body: Joi.object({
        id_Pacientes: Joi.number().required(),
        id_Psicologos: Joi.number().required(),
        dataAtendimento: Joi.date().required(),
        observacao : Joi.string().required()

    })
})

   