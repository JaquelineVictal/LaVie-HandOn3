const psicologos = require('../models/psicologos')

const psicologosController = {
  listarPsicologo: async (req, res) => {
    const listaDePsicologo = await psicologos.findAll()
    res.json(listaDePsicologo)
  },

  async cadastrarPsicologo(req, res) {
    const { nome, email, senha, apresentacao } = req.body

    const novoPsicologo = await psicologos.create({
      nome,
      email,
      senha,
      apresentacao
    })

    res.json(novoPsicologo)
  },

  async deletarPsicologo(req, res) {
    try{
    const {id} = req.params
      await psicologos.destroy({
        where: {
          id_Psicologos: id,
        },
      })
    
    res.status(204).json()
    } catch(error){
        return res.status(404).json("Id não encontrado!");
    }
  }
}

module.exports = psicologosController
