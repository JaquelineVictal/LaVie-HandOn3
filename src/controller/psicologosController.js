const atendimentos = require("../models/psicologos");
const psicologosController = {
    listarPsicologo: (req, res) => {
        res.json([{ id : "1" , nome : "Maria Joaquina" }, { id : "2" , nome : "João Felipe" }]);
    },

    async cadastrarPsicologo(req, res) {
        const { id_Psicologos, nome, email, senha, apresentacao } = req.body;
        
        const novoPsicologo = await pacientes.create({
            id_Psicologos,
            nome,
            email,
            senha,
            apresentacao,
        });

        res.json(novoPsicologo);
    },
};

module.exports = psicologosController;