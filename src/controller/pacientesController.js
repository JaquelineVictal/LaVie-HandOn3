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
};

module.exports = pacientesController;