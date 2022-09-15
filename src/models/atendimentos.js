const { DataTypes } = require('sequelize');
const db = require("../database");

// Esta dando erro no db.define perguntar na aula segunda feira para o professor
const atendimentos = db.define("atendimentos", {
    id_Atendimentos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_Pacientes: {
        type: DataTypes.INTEGER,
<<<<<<< Updated upstream
        primaryKey: true,
        autoIncrement: true,
    },
    id_Psicologos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dataAtendimento: {
        type: DataTypes.DATE,
        //Precisa atualizar o tipo de informação
    },
    observacao: {
        //Precisa atualizar o tipo de informação
=======
         
    },
    id_Psicologos: {
        type: DataTypes.INTEGER,
               
    },
    dataAtendimento: {
        type: DataTypes.DATE
    },
    observacao: {
        type: DataTypes.STRING

>>>>>>> Stashed changes
    },
    Pacientes_id_Pacientes: {
        //Precisa atualizar o tipo de informação
    },
    Psicologos_id_Psicologos: {
        //Precisa atualizar o tipo de informação
    },
}, {
    tableName: 'atendimentos', 
//});

module.exports = atendimentos;