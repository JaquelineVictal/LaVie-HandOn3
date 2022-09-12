const pacientes = require("../models/pacientes");
const atendimentos = require("../models/atendimentos");

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