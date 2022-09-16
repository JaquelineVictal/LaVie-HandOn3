
const { Psicologos } = require("../models/index");
const bcrypt = require("bcryptjs");



const psicologosController = {
    
    // Get all 

    listAll: async (req, res) => {
        try {
            // select * from gender
        const psicologos = await Psicologos.findAll();
    
        return res.status(200).json(psicologos);
            
        } catch (error) {
            console.log(error);            
        }
        
      },
    
    // Get by id
    getOne: async (req, res) => {

        const { id_Psicologos } = req.params;
        
        const psicologo = await Psicologos.findByPk(id_Psicologos);

        if(!psicologo.length){
          return res.status(404).json('Id não encontrado');
        }
    
        return  res.status(200).json(psicologo);

         
      },
        
      

    // Cadastro de Psicilogos

    cadastrarPsicologo: async (req, res) => {

        const { nome, email, senha, apresentacao } = req.body;

        const senhaHash = bcrypt.hashSync(senha, 10);
        const userSaved = await Psicologos.count({
                where: {
                  email
                },
              });
                      
         if (userSaved) {
            return res.status(400).json("Email já cadastrado");
          }
    
          const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha: senhaHash,
            apresentacao
           });
    
          return res.status(201).json(novoPsicologo);
      },   

    login: async (req, res) => {

        const { email, senha } = req.body;

        try {

            const userSaved = await Psicologos.findOne({
                where: {
                  email,
                },
              });
          
              if (!userSaved) {
                return res.status(400).json("Usuario não cadastrado");
              }
          
              if (!bcrypt.compareSync(senha, userSaved.senha)) {
                return res.status(400).json("Senha incorreta");
              }
          
              return res.status(200).json("Login com sucesso!");
            
        } catch (error) {
            console.log(error);
        }   
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
    

    deletarPsicologo: async (req, res) => {
      
        const { id_Psicologo } = req.params;
    
        await Psicologos.destroy({
          where: {
            id_Psicologo
          },
        });
    
        res.status(204);
    },

};


module.exports = psicologosController;