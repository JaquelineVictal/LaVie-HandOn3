const db= require("../database");
const { DataTypes } = require('sequelize');

const atendimentos = db.define("psicologos", {
    id_Psicologos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.INTEGER,
    },
    senha: {
        type: DataTypes.INTEGER,
    },
    apresentacao: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'psicologos', 
});

module.exports = psicologos;