const Atendimentos = require("../models/atendimentos");

const atendimentosController = {
 // Get all 

 listAll: async (req, res) => {
    // select * from gender
    const atendimentos = await Atendimentos .findAll();

    return res.status(200).json(atendimentos);
},

    async cadastrarAtendimento(req, res) {
        const { id_Paciente, id_Psicologo, dataAtendimento } = req.body;
        
        const novoAtendimento = await atendimentos.create({
            id_Paciente,
            id_Psicologo,
            dataAtendimento,
            observacao,
            Pacientes_id_Pacientes,
            Psicologos_id_Psicologos,
        });

        return res.status(201).json(novoAtendimento);
    },
};

module.exports = atendimentosController;