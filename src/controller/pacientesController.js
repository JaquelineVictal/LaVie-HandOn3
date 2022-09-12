const pacientes = require("../models/pacientes");
const pacientesController = {
    listarPaciente: async (req, res) => {
        const listaDePaciente = await pacientes.findAll()
        res.json(listaDePaciente)
    },

    async cadastrarPaciente(req, res) {
        const { nome, email, dataNascimento} = req.body;
        
        const novoPaciente = await pacientes.create({
            nome,
            email,
            dataNascimento
        });

        res.json(novoPaciente);
    },
};

module.exports = pacientesController;