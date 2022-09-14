const atendimentos = require("../models/atendimentos");
const atendimentosController = {
    listarAtendimento: (req, res) => {
        res.json([{ id : "1" }, { id : "2" }]);
    },

    async cadastrarAtendimento(req, res) {
        const { id_Atendimentos, id_Paciente, id_Psicologo, dataAtendimento } = req.body;
        
        const novoAtendimento = await atendimentos.create({
            id_Atendimentos,
            id_Paciente,
            id_Psicologo,
            dataAtendimento,
            observacao,
        });
        
        res.json(novoAtendimento);
    },
};

module.exports = atendimentosController;