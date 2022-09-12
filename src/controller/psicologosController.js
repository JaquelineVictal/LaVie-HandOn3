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

    async deletarPsicologo(req, res) {
        try {
        const { id_Psicologos } = req.params;
    
        await Produtos.destroy({
          where: {
            id_Psicologos,
          },
        });
    
        res.status(204).json("Psicologo deletado com sucesso!");
      } catch(error) {
        return res.status(404).json("Id não encontrado!");
      }
    },
};

module.exports = psicologosController;