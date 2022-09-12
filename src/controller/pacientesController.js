const atendimentos = require("../models/pacientes");
const pacientesController = {
    listarPaciente: (req, res) => {
        res.json([{ id : "1" , nome : "Maria Joaquina" }, { id : "2" , nome : "João Felipe" }]);
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
        const { id_Pacientes } = req.params;
    
        await Produtos.destroy({
          where: {
            id_Pacientes,
          },
        });
    
        res.status(204).json("Paciente deletado com sucesso!");
      } catch(error) {
        return res.status(404).json("Id não encontrado!");
      }
    },
};

module.exports = pacientesController;