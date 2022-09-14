const pacientes = require("../models/pacientes");
const pacientesController = {
    listarPaciente: async (req, res) => {
        const listaDePaciente = await pacientes.findAll()
        res.json(listaDePaciente)
    },

    async cadastrarPaciente(req, res) {
        const { nome, email, dataNascimento } = req.body;
        
        const novoPaciente = await pacientes.create({
            nome,
            email,
            dataNascimento
        });

        res.json(novoPaciente)
    },

    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nome, email, dataNascimento } = req.body;
    
        const produtoAtualizado = await Produtos.update(
          {
            nome,
            email,
            dataNascimento,
          },
          {
            where: {
              id_Pacientes: id,
            },
          }
        );
    
        res.json("Produto Atualizado");
      },
};

module.exports = pacientesController;