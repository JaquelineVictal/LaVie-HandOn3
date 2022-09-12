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
            email,
            dataNascimento
        });

        return res.status(201).json(novoPaciente);
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