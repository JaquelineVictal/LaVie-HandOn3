const Pacientes = require("../models/index.js");

const pacientesController = {

    listarPaciente: async (req, res) => {
        const listaPacientes = await Pacientes.findAll();

        res.status(200).json(listaPacientes);
    },

    listarUmPaciente: async (req, res) => {
      try {
        const { id } = req.params;
    
        const listaUm = await Pacientes.findOne({
          where: {
            id_Pacientes: id,
          },
        });
    
        res.status(200).json;
      } catch(error) {
        return res.status(404).json("Id não encontrado!");
      }
    },
  

    cadastrarPaciente: async (req, res) => {

        const {nome } = req.body;
        
        const novoPaciente = await Pacientes.create({
            nome
        });

        res.json(novoPaciente);
    },

     deletarPaciente: async (req, res) => {
        try {
        const { id } = req.params;
    
        await Pacientes.destroy({
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