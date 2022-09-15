const Atendimentos = require("../models/index.js");

const atendimentosController = {
 // Get all 

 listAll: async (req, res) => {
    // select * from gender
    const atendimentos = await Atendimentos.findAll();

    return res.status(200).json(atendimentos);
},

    cadastrarAtendimento: async (req, res) => {
        const { id_Paciente, id_Psicologo, dataAtendimento } = req.body;
        
        const novoAtendimento = await Atendimentos.create({
            id_Paciente,
            id_Psicologo,
            dataAtendimento,
        });

        return res.status(201).json(novoAtendimento);
    },
};

module.exports = atendimentosController;