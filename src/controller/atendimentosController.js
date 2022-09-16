const { Atendimentos } = require("../models/index.js");

const atendimentosController = {

 listarAtendimento: async (req, res) => {
        const listaAtendimentos = await atendimentos.findAll();

        res.status(200).json(listaAtendimentos);
    },

    listarUmAtendimento: async (req, res) => {
        try {
            const { id } = req.params;
        
            const listaUmAtendimento = await atendimentos.findByPk(id, {
              include: [pacientes, psicologos]
            });
        
            res.status(200).json(listaUmAtendimento);
          } catch(error) {
            return res.status(404).json("Id não encontrado!");
          }
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