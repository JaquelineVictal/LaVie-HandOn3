const psicologos = require("../models/psicologos");



const psicologosController = {
    listarPsicologo: async (req, res) => {
        const listaDePsicologo = await psicologos.findAll();
        res.json(listaDePsicologo)
    },

    async cadastrarPsicologo(req, res) {
        const { nome, email, senha, apresentacao } = req.body;
        
        const novoPsicologo = await psicologos.create({
            nome,
            email,
            senha,
            apresentacao,
        });

        res.json(novoPsicologo);
    },
};

module.exports = psicologosController;