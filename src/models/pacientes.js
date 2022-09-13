const db = require("../database");
const { DataTypes } = require('sequelize');

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
        type: DataTypes.INTEGER,
    },
}, 

{
    tableName: 'pacientes', 
    timestamps: false
});

module.exports = pacientes;