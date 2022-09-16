const { Atendimentos } = require("../models/index.js");

const atendimentosController = {

 listarAtendimento: async (req, res) => {
        const listaAtendimentos = await Atendimentos.findAll();

        res.status(200).json(listaAtendimentos);
    },

    listarUmAtendimento: async (req, res) => {
        
            const { id_Atendimentos } = req.params;
        
            const listaUmAtendimento = await Atendimentos.findByPk(id_Atendimentos);

            if(!listaUmAtendimento){
              return res.status(404).json('Id não encontrado');
            }
        
            res.status(200).json(listaUmAtendimento);
         
    },


    cadastrarAtendimento: async (req, res) => {
        const { id_Pacientes, id_Psicologos, dataAtendimento, observacao} = req.body;
        
        const novoAtendimento = await Atendimentos.create({
            id_Pacientes,
            id_Psicologos,
            dataAtendimento,
            observacao            
        });

        return res.status(201).json(novoAtendimento);
    },
};

module.exports = atendimentosController;