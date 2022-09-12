const Pacientes = require("../models/pacientes");

const pacientesController = {
    // Get all 

    listAll: async (req, res) => {
        // select * from gender
        const pacientes = await Pacientes.findAll();

        return res.status(200).json(pacientes);
    },


    cadastrarPaciente: async (req, res) => {
        const { nome } = req.body;
        
        const novoPaciente = await Pacientes.create({
            nome,
        });

        return res.status(201).json(novoPaciente);
    },
};

module.exports = pacientesController;