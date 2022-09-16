const { validate, Joi } = require('express-validation')

module.exports = validate({
    params: Joi.object({
        id_Pacientes: Joi.number().required()
      })
})