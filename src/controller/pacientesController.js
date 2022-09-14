const pacientes = require("../models/pacientes");

const pacientesController = {
    listarPaciente: async (req, res) => {
        const listaPacientes = await pacientes.findAll();

        res.status(200).json(listaPacientes);
    },

    listarUmPaciente: async (req, res) => {
      try {
        const { id } = req.params;
    
        const listaUm = await pacientes.findOne({
          where: {
            id_Pacientes: id,
          },
        });
    
        res.status(200).json;
      } catch(error) {
        return res.status(404).json("Id não encontrado!");
      }
    },
  

    async cadastrarPaciente(req, res) {
        const { id_Pacientes, nome } = req.body;
        
        const novoPaciente = await pacientes.create({
            id_Pacientes,
            nome,
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