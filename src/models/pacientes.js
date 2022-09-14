const { DataTypes } = require('sequelize');
const db = require("../database");

// Esta dando erro no db.define perguntar na aula segunda feira
//const atendimentos = db.define("pacientes", {
    id_Pacientes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'pacientes', 
//});

module.exports = pacientes;