const Psicologos = require("../models/psicologos");

const psicologosController = {
    
    // Get all 

    listAll: async (req, res) => {
        // select * from gender
        const psicologos = await Psicologos.findAll();
    
        return res.status(200).json(psicologos);
      },
    
    // Get by id
    getOne: async (req, res) => {
        const { id_Psicologos } = req.params;
    
        const psicologo = await Psicologos.findByPk(id_Psicologos);
    
        return  res.status(200).json(psicologo);
      },

    // Cadastro de Psicilogos

    cadastrarPsicologo: async (req, res) => {
        const { nome, email, senha, apresentacao } = req.body;
        
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            apresentacao
        });

        return res.status(201).res.json(novoPsicologo);
    },

    // Editar por Id

    updatePsicologo:  async (req, res) => {
        const { id_Psicologos } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
    
        const psicologoUpdate = await Psicologos.update(
          {
            nome,
            email,
            senha,
            apresentacao
          },
          {
            where: {
                id_Psicologos,
            },
          }
        );
    
        return res.status(200).json(psicologoUpdate);
      },
    
};


module.exports = psicologosController;