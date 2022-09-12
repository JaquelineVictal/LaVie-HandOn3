const psicologos = require("../models/psicologos");
const atendimentos = require("../models/atendimentos");

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
        const { id } = req.params;
    
        await psicologos.destroy({
          where: {
            id_Psicologos: id,
          },
        });
    
        res.status(204);
      } catch(error) {
        return res.status(404).json("Id não encontrado!");
      }
    },
};

module.exports = psicologosController;