const { ValidationError } = require("sequelize");
const Pacientes = require("../models/pacientes");

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

        const {nome, email, dataNascimento } = req.body;
        try{
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            dataNascimento
        });

        res.status(201).json(novoPaciente)
      } catch(error){
        if(error.message == "Validation error")
        {
        return res.status(400).json("Email já cadastrado. Por favor, digite outro email!")
      } else{
        return res.status(400).json("Data incorreta. Ex: AAAA-MM-DD")
      }
      }
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