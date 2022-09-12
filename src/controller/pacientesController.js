const pacientes = require("../models/pacientes");

const pacientesController = {
    listarPaciente: async (req, res) => {
        const listaDePaciente = await pacientes.findAll()
        res.json(listaDePaciente)
    },

    async cadastrarPaciente(req, res) {
        const { nome, email, dataNascimento} = req.body;
        
        const novoPaciente = await pacientes.create({
            nome,
            email,
            dataNascimento
        });

        res.json(novoPaciente);
    },

    async deletarPaciente(req, res) {
        try {
        const { id } = req.params;
    
        await pacientes.destroy({
          where: {
            id_Pacientes: id,
          },
        });
    
        res.status(204);
      } catch(error) {
        return res.status(404).json("Id não encontrado!");
      }
    },
};

module.exports = pacientesController;