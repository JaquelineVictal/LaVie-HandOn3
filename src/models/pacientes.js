const db= require("../database");
const { DataTypes } = require('sequelize');

const atendimentos = db.define("pacientes", {
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
});

module.exports = pacientes;