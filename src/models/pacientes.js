const db = require("../database");
const { DataTypes } = require('sequelize');

const Pacientes = db.define("pacientes", {
    id_Pacientes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
    },
    dataNascimento: {
        type: DataTypes.DATE
    }

}, 

{
    tableName: 'pacientes', 
    timestamps: false
});

module.exports = Pacientes;