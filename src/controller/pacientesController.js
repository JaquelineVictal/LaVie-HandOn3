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
      let updatePaciente = {}

    
      const listaUm = await Pacientes.findOne({
        where: {
          id_Pacientes: id,
        },
      });



      try{
        console.log(email)
        if(email == listaUm.email && nome == listaUm.nome && dataNascimento == listaUm.dataNascimento){
          res.status(400).json("Essas informação já estão registradas")
        } else if (email != listaUm.email){
          updatePaciente = await Pacientes.update({
            nome,
            email, 
            dataNascimento
            
          },{
            where: {
              id_Pacientes: id
            }
          })
        } else {
      updatePaciente = await Pacientes.update({
          nome,
          dataNascimento,
          
      },{
      where: {
        id_Pacientes: id,
      }
    }
    );
  }
    
      res.status(201).json("Atualizado com sucesso")
    } catch(error){
      if(error.message == "Validation error")
      {
      return res.status(400).json("Email já cadastrado. Por favor, digite outro email!")
    } else{
      console.log(error.message)
      return res.status(400).json("Data incorreta. Ex: AAAA-MM-DD")
    }
    }
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