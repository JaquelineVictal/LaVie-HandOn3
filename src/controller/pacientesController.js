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

        if(!listaUm){
          return res.status(404).json('Id não encontrado');
        }
    
        return res.status(200).json(listaUm);
      
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

    updatePaciente: async (req, res) => {
      const {id} = req.params
      const {nome, email, dataNascimento } = req.body;
           

      const pacienteUpdate = await Pacientes.update(
              {
                nome,
                email,
                dataNascimento
              },
              {
                where: {
                  id_Pacientes: id,
                },
              }
            );
        
      return res.status(200).json(pacienteUpdate);
   },

    deletarPaciente: async (req, res) => {
       
        const { id } = req.params;
    
        await Pacientes.destroy({
          where: {
            id_Pacientes: id,
          },
        });
    
      return res.status(204).json("Deleted");
            
    },
};

module.exports = pacientesController;