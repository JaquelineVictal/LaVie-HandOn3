const { Pacientes } = require("../models/index.js");

const pacientesController = {

    listarPaciente: async (req, res) => {
        const listaPacientes = await Pacientes.findAll();

        res.status(200).json(listaPacientes);
    },

    listarUmPaciente: async (req, res) => {
      
        const { id } = req.params;
    
        const listaUm = await Pacientes.findOne({
          where: {
            id_Pacientes: id,
          },
        });
    
        res.status(200).json(listaUm);
      
    },
  
    cadastrarPaciente: async (req, res) => {

      const {nome, email, dataNascimento } = req.body;
        
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            dataNascimento
        });

        res.json(novoPaciente);
    },

    deletarPaciente: async (req, res) => {
       
        const { id } = req.params;
    
        await Pacientes.destroy({
          where: {
            id_Pacientes: id,
          },
        });
    
      return res.status(204);
            
    },
};

module.exports = pacientesController;