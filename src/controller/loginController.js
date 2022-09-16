const { Psicologos } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const secret = require('../config/secret')

const loginController = {

    login: async (req, res) => {

        const { email, senha } = req.body;
        

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

              const token = jwt.sign({
                id_Psicologos: userSaved.id_Psicologos,
                nome: userSaved.nome,
                email: userSaved.email                
              },
              secret.key
              );
          
              return res.status(200).json(token);
            
       
    }   
}


module.exports = loginController;