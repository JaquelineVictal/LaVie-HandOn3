const db= require("../database");
const { DataTypes } = require('sequelize');

// Esta dando erro no db.define perguntar na aula segunda feira
const pacientes = db.define("pacientes", {
    id_Pacientes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
    },
    dataNascimento: {
        type: DataTypes.DATE,
    }
}, {
    tableName: 'pacientes', 
    timestamps: false
});

module.exports = pacientes;