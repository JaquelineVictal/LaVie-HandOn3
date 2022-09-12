const db = require("../database");
const { DataTypes } = require('sequelize');

// Esta dando erro no db.define perguntar na aula segunda feira para o professor
const Atendimentos = db.define("atendimentos", {
    id_Atendimentos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_Pacientes: {
        type: DataTypes.INTEGER,
        //primaryKey: true,
        
       
    },
    id_Psicologos: {
        type: DataTypes.INTEGER,
        //primaryKey: true,
        
    },
    dataAtendimento: {
        type: DataTypes.DATE
           //Precisa atualizar o tipo de informação
    },
    observacao: {
        type: DataTypes.STRING
        //Precisa atualizar o tipo de informação
    },
    
}, {
    tableName: 'atendimentos',
    timestamps: false, 
});



module.exports = Atendimentos;