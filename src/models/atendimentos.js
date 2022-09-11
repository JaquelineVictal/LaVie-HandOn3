const db= require("../database");
const { DataTypes } = require('sequelize');

const atendimentos = db.define("atendimentos", {
    id_Atendimentos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_Pacientes: {
        type: DataTypes.INTEGER,
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
    },
    Pacientes_id_Pacientes: {
        //Precisa atualizar o tipo de informação
    },
    Psicologos_id_Psicologos: {
        //Precisa atualizar o tipo de informação
    },
}, {
    tableName: 'atendimentos', 
});

module.exports = atendimentos;